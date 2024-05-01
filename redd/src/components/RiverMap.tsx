import { useEffect, useRef } from "react";
import { createMap, addDamLayer, addRiverLayer, addSalmonDataLayer } from "../helpers/arcGisHelpers/createMap"
import { getData } from "../helpers/dataHelpers/getData";
import { useDispatch, useSelector } from "react-redux"
import { selectDamCounts, setCount } from "../redux/damCountSlice"
import DateSelection from "./DateSelection";
import { selectDate } from "../redux/dateSlice";

const RiverMap = () => {
    const mapRef = useRef(null)
    const dispatch = useDispatch()
    const allCounts = useSelector(selectDamCounts)
    const date = useSelector(selectDate)
    const dataFetchedRef = useRef(false);

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
            dispatch(setCount(countData));
            dataFetchedRef.current = !dataFetchedRef.current;
            console.log(dataFetchedRef.current)
        };

        fetchData();

    }, [date]);

    useEffect(() => {
        if (!mapRef?.current || !date) return;

        if (allCounts.bon.length > 0) {
            console.log("bon.length is greater than 0")
            const view = createMap(mapRef.current);
            addSalmonDataLayer(view.map, allCounts, date);
            addDamLayer(view.map);

            return () => {
                view.destroy();
            };
        }

    }, [dataFetchedRef.current])

    return (
        <>
            <div className="flex flex-col items-center h-full">
                <div className="block h-5/6 w-full bg-green-900 border-neutral-600 border-4 rounded-sm" ref={mapRef}></div>
                <div className="p-2">
                    <DateSelection />
                </div>
            </div>
        </>
    )
}

export default RiverMap;
