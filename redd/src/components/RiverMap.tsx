import MapView from "@arcgis/core/views/MapView";
import Map from "@arcgis/core/Map";
import { useEffect, useRef } from "react";

const RiverMap = () => {
    const mapRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!mapRef?.current) return;

        const map = new Map({
            basemap: 'topo',
        })
        const view = new MapView({
            map: map,
            container: mapRef.current,
            center: [-121.9434, 45.6411],
            zoom: 8.5,
        });
        return () => {
            view.destroy()
        }
    }, [])

    return (
        <div className="h-96 w-80 bg-orange-400" ref={mapRef}></div>
    )
}

export default RiverMap;