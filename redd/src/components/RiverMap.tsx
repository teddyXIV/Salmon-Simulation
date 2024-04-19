import MapView from "@arcgis/core/views/MapView";
import Map from "@arcgis/core/Map";
import { useEffect, useRef } from "react";

const RiverMap = () => {
    const mapRef = useRef(null)

    useEffect(() => {
        if (!mapRef?.current) return;

        const map = new Map({
            basemap: 'topo',
        })
        const view = new MapView({
            map: map,
            container: mapRef.current,
            center: [-121.35, 46.25],
            zoom: 8.5,
            // scale: 54000
        });
        return () => {
            view.destroy()
        }
    }, [])

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="h-1/2 w-5/6 bg-green-900" ref={mapRef}></div>
        </div>
    )
}

export default RiverMap;