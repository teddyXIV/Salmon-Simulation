import MapView from "@arcgis/core/views/MapView";
import Map from "@arcgis/core/Map";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import Graphic from "@arcgis/core/Graphic";
import Point from "@arcgis/core/geometry/Point";
import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol";
import { useEffect, useRef } from "react";
import { damData } from "../data/damLocationData";

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
            center: [-121.35, 46.65],
            // zoom: 8,
            scale: 2300000
        });

        const graphicsLayer = new GraphicsLayer();
        view.map.add(graphicsLayer);

        damData.forEach(dam => {
            const point = new Point({
                longitude: dam.long,
                latitude: dam.lat,
            });

            const marker = new SimpleMarkerSymbol({
                color: "green",
            })

            const damPoint = new Graphic({
                geometry: point,
                symbol: marker
            });

            graphicsLayer.add(damPoint);
        })

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