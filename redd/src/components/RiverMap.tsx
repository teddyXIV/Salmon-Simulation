import { useEffect, useRef, useState } from "react";
import { createMap, addDamLayer, addRiverLayer } from "../helpers/arcGisHelpers/createMap"
import { createSalmonDataLayer } from "../helpers/arcGisHelpers/createSalmonDataLayer";
import { getData } from "../helpers/dataHelpers/getData";
import { useDispatch, useSelector } from "react-redux"
import { selectDamCounts, setCount } from "../redux/damCountSlice"
import DateSelection from "./DateSelection";
import { selectDate } from "../redux/dateSlice";
import DateError from "./DateError";

const RiverMap = () => {
    const mapRef = useRef(null)
    const dispatch = useDispatch()
    const allCounts = useSelector(selectDamCounts)
    const date = useSelector(selectDate)
    const dataFetchedRef = useRef(false);
    const [errorVisible, setErrorVisible] = useState<string>("hidden")
    const [map, setMap] = useState<any>(null)

    useEffect(() => {
        if (!mapRef?.current) return;

        const view = createMap(mapRef.current);
        setMap(view)
        addRiverLayer(view.map);
        addDamLayer(view.map);

        return () => {
            view.destroy()
        }
    }, [])

    useEffect(() => {
        if (!mapRef?.current || !date) return;

        const fetchData = async () => {
            const countData = await getData(date);
            if (typeof (countData) !== "string") {
                setErrorVisible("hidden");
                dispatch(setCount(countData));
                dataFetchedRef.current = !dataFetchedRef.current;
            } else {
                setErrorVisible("block")
            }
        };

        fetchData();

    }, [date]);

    useEffect(() => {
        if (!mapRef?.current || !date) return;

        if (allCounts.bon.length > 0) {

            const salmonLayer = createSalmonDataLayer(allCounts, date);

            if (map) {
                map.map.add(salmonLayer)
            }

            return () => {
                if (salmonLayer && map) {
                    salmonLayer.destroy();
                }
            }

        }

    }, [dataFetchedRef.current])

    return (
        <div className="relative h-full w-full bg-green-900">
            <div className="absolute inset-0 flex flex-col items-center">
                <div className="block h-full w-full bg-green-900 relative" ref={mapRef}></div>
                <div className="absolute bottom-4 sm:bottom-16 sm:right-10 z-10 bg-black/85 h-fit w-full sm:w-96 sm:rounded-lg justify-center items-center py-5">
                    <div className={errorVisible}>
                        <DateError />
                    </div>
                    <DateSelection />
                </div>
            </div>
        </div>
    )
}

export default RiverMap;

