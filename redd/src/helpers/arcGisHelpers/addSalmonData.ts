// import MapView from "@arcgis/core/views/MapView";
import Map from "@arcgis/core/Map";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import Graphic from "@arcgis/core/Graphic";
import Point from "@arcgis/core/geometry/Point";
import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol";
import TextSymbol from "@arcgis/core/symbols/TextSymbol";
// import SimpleLineSymbol from "@arcgis/core/symbols/SimpleLineSymbol";
// import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
// import SimpleRenderer from "@arcgis/core/renderers/SimpleRenderer";
import { BonToTda } from "../../data/riverPointsData";
import { SalmonCount } from "../../damCountTypes";
import { testCounts } from "../../data/testData";

export const addSalmonPoints = (map: Map, startDamCount: SalmonCount, endDamCount: SalmonCount) => {
    const graphicsLayer = new GraphicsLayer();

    const damDiff = startDamCount.salmon_count - endDamCount.salmon_count;
    const salmonCountDecrement = damDiff / BonToTda.length;
    let multiplier = 0;

    BonToTda.forEach(point => {
        const count = Math.round(startDamCount.salmon_count - (salmonCountDecrement * multiplier))

        const dataPoint = new Point({
            longitude: point.long,
            latitude: point.lat,
        });

        const marker = new SimpleMarkerSymbol({
            color: "red",
        })

        const riverPoint = new Graphic({
            geometry: dataPoint,
            symbol: marker,
            attributes: {
                salmonEst: count
            }
        });

        //Label stuff below

        const labelPoint = new Point({
            longitude: point.long,
            latitude: point.lat + 0.05
        })

        const label = new TextSymbol({
            text: count.toString(),
            color: "black",
            font: {
                size: 12,
            }
        })

        const pointLabel = new Graphic({
            geometry: labelPoint,
            symbol: label
        })

        graphicsLayer.addMany([riverPoint, pointLabel]);
        multiplier += 1
    })

    map.add(graphicsLayer)
}

export const addBonToTdaData = (map: Map, date: number) => {
    const bon = testCounts.allCounts.bon;
    const tda = testCounts.allCounts.tda;








}