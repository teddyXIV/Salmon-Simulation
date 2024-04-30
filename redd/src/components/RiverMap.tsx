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

    // useEffect(() => {
    //     if (!mapRef?.current) return;

    //     const view = createMap(mapRef.current);
    //     addRiverLayer(view.map);

    //     const fetchData = async () => {
    //         const countData = await getData(date);
    //         dispatch(setCount(countData))
    //         addSalmonDataLayer(view.map, allCounts, date)
    //         console.log(allCounts)
    //     }
    //     fetchData();
    //     console.log(allCounts)
    //     // addSalmonDataLayer(view.map, allCounts, date)
    //     addDamLayer(view.map);


    //     return () => {
    //         view.destroy()
    //     }
    // }, [])

    useEffect(() => {
        if (!mapRef?.current) return;

        const view = createMap(mapRef.current);
        addRiverLayer(view.map);
        addDamLayer(view.map);

        const fetchData = async () => {
            const countData = await getData(date);
            dispatch(setCount(countData));
        };

        fetchData();

        if (allCounts.bon.length > 0) {
            addSalmonDataLayer(view.map, allCounts, date);
        }

        return () => {
            view.destroy();
        };
    }, [date]); // Add date as a dependency


    return (
        <>
            <div className="h-[700px] w-full lg:w-5/6 bg-green-900 border-neutral-600 border-8 rounded-lg" ref={mapRef}></div>
            <div className="p-4">
                <DateSelection />
            </div>
        </>
    )
}

export default RiverMap;