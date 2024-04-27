import { useEffect, useRef } from "react";
import { createMap, addDamLayer, addRiverLayer, addSalmonDataLayer } from "../helpers/arcGisHelpers/createMap"
// import { testCounts } from "../data/testData";
// import { getData } from "../helpers/dataHelpers/getData";
// import { useDispatch, useSelector } from "react-redux"
// import { selectDamCounts, setCount } from "../redux/damCountSlice"

const RiverMap = () => {
    const mapRef = useRef(null)
    // const dispatch = useDispatch()
    // const allCounts = useSelector(selectDamCounts)

    useEffect(() => {
        if (!mapRef?.current) return;

        const view = createMap(mapRef.current);
        addRiverLayer(view.map);
        addSalmonDataLayer(view.map, 3)
        addDamLayer(view.map);

        // const fetchData = async () => {
        //     const countData = await getData();
        //     dispatch(setCount(countData))
        // }
        // fetchData();
        // console.log(allCounts)

        return () => {
            view.destroy()
        }
    }, [])

    return (
        <div className="flex justify-center items-center h-screen bg-green-600">
            <div className="h-[700px] w-full lg:w-5/6 bg-green-900" ref={mapRef}></div>
        </div>
    )
}

export default RiverMap;