// import MapView from "@arcgis/core/views/MapView";
import Map from "@arcgis/core/Map";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import Graphic from "@arcgis/core/Graphic";
import Point from "@arcgis/core/geometry/Point";
import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol";
// import TextSymbol from "@arcgis/core/symbols/TextSymbol";
// import SimpleLineSymbol from "@arcgis/core/symbols/SimpleLineSymbol";
// import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
// import SimpleRenderer from "@arcgis/core/renderers/SimpleRenderer";
import { BonToTda } from "../../data/riverPointsData";
import { SalmonCount } from "../../damCountTypes";

export const addSalmonPoints = (map: Map, salmonCount: SalmonCount) => {
    const graphicsLayer = new GraphicsLayer();

    BonToTda.forEach(point => {
        const dataPoint = new Point({
            longitude: point.long,
            latitude: point.lat,
        });

        const marker = new SimpleMarkerSymbol({
            color: "green",
        })

        const riverPoint = new Graphic({
            geometry: dataPoint,
            symbol: marker,
            attributes: {
                salmonEst: salmonCount
            }
        });

        graphicsLayer.add(riverPoint);
    })

    map.add(graphicsLayer)
}