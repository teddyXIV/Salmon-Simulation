import { useEffect, useRef } from "react";
import { createMap } from "../helpers/arcGisHelpers/createMap"

const RiverMap = () => {
    const mapRef = useRef(null)

    useEffect(() => {
        if (!mapRef?.current) return;

        const view = createMap(mapRef.current)

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