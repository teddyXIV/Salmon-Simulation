import MapView from "@arcgis/core/views/MapView";
import Map from "@arcgis/core/Map";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import Graphic from "@arcgis/core/Graphic";
import Point from "@arcgis/core/geometry/Point";
import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol";
import TextSymbol from "@arcgis/core/symbols/TextSymbol";
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
        center: [-121.134, 46.5],
        scale: 2600000,
        constraints: {
            minScale: 4000000,
        }
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

        const labelPoint = new Point({
            longitude: dam.long,
            latitude: dam.lat + 0.05
        })

        const marker = new SimpleMarkerSymbol({
            color: [16,57,0],
            outline: {
                color: [255,255,255],
                width: "2px"
            }
            
        })

        const label = new TextSymbol({
            text: dam.name,
            color: "black",
            haloColor: "white",
            haloSize: "1px",
            font: {
                size: 12,
            }
        })

        const damPoint = new Graphic({
            geometry: point,
            symbol: marker
        });

        const damLabel = new Graphic({
            geometry: labelPoint,
            symbol: label
        })

        graphicsLayer.addMany([damPoint, damLabel]);
    })

    map.add(graphicsLayer)
}

export const addRiverLayer = (map: Map) => {
    const riverSymbol = new SimpleLineSymbol({
        color: [13, 190, 229],
        width: 4
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
