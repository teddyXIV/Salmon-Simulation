import { useEffect, useRef, useState } from "react";
import { createMap, addDamLayer, addRiverLayer, addSalmonDataLayer } from "../helpers/arcGisHelpers/createMap"
import { getData } from "../helpers/dataHelpers/getData";
import { useDispatch, useSelector } from "react-redux"
import { selectDamCounts, setCount } from "../redux/damCountSlice"
import DateSelection from "./DateSelection";
import { selectDate } from "../redux/dateSlice";
import DateError from "./DateError";
import DateNav from "./DateNav";

const RiverMap = () => {
    const mapRef = useRef(null)
    const dispatch = useDispatch()
    const allCounts = useSelector(selectDamCounts)
    const date = useSelector(selectDate)
    const dataFetchedRef = useRef(false);
    const [errorVisible, setErrorVisible] = useState<string>("hidden")

    useEffect(() => {
        if (!mapRef?.current) return;

        const view = createMap(mapRef.current);
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
            const view = createMap(mapRef.current);
            addSalmonDataLayer(view.map, allCounts, date);
            addDamLayer(view.map);

            return () => {
                view.destroy();
            };
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
                    {date ? <DateNav/> : null}
                </div>
            </div>
        </div>
    )
}

export default RiverMap;

