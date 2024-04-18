import MapView from "@arcgis/core/views/MapView";
import { useEffect, useRef } from "react";

const Map = () => {
    const mapRef = useRef(null)

    useEffect(() => {
        const view = new MapView();
    }, [])

    return (
        <div className="" ref={mapRef}></div>
    )
}

export default Map;