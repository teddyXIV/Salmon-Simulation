import MapView from "@arcgis/core/views/MapView";
import Map from "@arcgis/core/Map";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import Graphic from "@arcgis/core/Graphic";
import Point from "@arcgis/core/geometry/Point";
import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol";
import { damData } from "../../data/damLocationData";

export const createMap = (mapRef: HTMLDivElement) => {
    const map = new Map({
        basemap: 'topo',
    })
    const newView = new MapView({
        map: map,
        container: mapRef,
        center: [-121.35, 46.75],
        scale: 2300000
    });

    const graphicsLayer = new GraphicsLayer();
    newView.map.add(graphicsLayer);

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

    return newView
}