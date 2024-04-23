import MapView from "@arcgis/core/views/MapView";
import Map from "@arcgis/core/Map";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import Graphic from "@arcgis/core/Graphic";
import Point from "@arcgis/core/geometry/Point";
import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol";
import SimpleLineSymbol from "@arcgis/core/symbols/SimpleLineSymbol";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import SimpleRenderer from "@arcgis/core/renderers/SimpleRenderer";
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

    return newView
}

export const addDamLayer = (map: Map) => {
    const graphicsLayer = new GraphicsLayer();

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

    map.add(graphicsLayer)
}

export const addRiverLayer = (map: Map) => {
    const riverSymbol = new SimpleLineSymbol({
        color: [0, 0, 255],
        width: 3
    })

    const renderer = new SimpleRenderer({
        symbol: riverSymbol
    })

    const riverLayer = new FeatureLayer({
        url: "https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/USA_Rivers_and_Streams/FeatureServer/0",
        definitionExpression: "name = 'Columbia River'",
        outFields: ["name"],
        renderer: renderer
    })

    map.add(riverLayer)
}