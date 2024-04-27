import Map from "@arcgis/core/Map";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
// import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
// import Graphic from "@arcgis/core/Graphic";
import Point from "@arcgis/core/geometry/Point";
// import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol";
// import TextSymbol from "@arcgis/core/symbols/TextSymbol";
import { bonToTda } from "../../data/riverPointsData";
import { testCounts } from "../../data/testData";
import HeatmapRenderer from "@arcgis/core/renderers/HeatmapRenderer";

export const addBonToTdaData = (map: Map, date: number) => {

    const bon = testCounts.allCounts.bon;

    const dayOfCount = bon[date].salmon_count;
    const dayPriorCount = bon[date - 1].salmon_count;

    const segmentCounts = [
        Math.round(dayOfCount * 0.1),
        Math.round(dayOfCount * 0.15),
        Math.round(dayOfCount * 0.25),
        Math.round(dayOfCount * 0.25),
        Math.round(dayOfCount * 0.15),
        Math.round(dayOfCount * 0.1),
        Math.round(dayPriorCount * 0.075),
        Math.round(dayPriorCount * 0.1),
        Math.round(dayPriorCount * 0.15),
        Math.round(dayPriorCount * 0.3),
        Math.round(dayPriorCount * 0.15),
        Math.round(dayPriorCount * 0.1),
        Math.round(dayPriorCount * 0.075)
    ];

    const features = bonToTda.map((point, i) => {
        const dataPoint = new Point({
            longitude: point.long,
            latitude: point.lat,
        });

        return {
            geometry: dataPoint,
            attributes: {
                OBJECTID: i,
                salmonEst: segmentCounts[i]
            }
        };
    });

    const heatmapRenderer = createHeatmapRenderer();

    const featureLayer = new FeatureLayer({
        fields: [
            {
                name: "OBJECTID",
                alias: "OBJECTID",
                type: "oid"
            },
            {
                name: "salmonEst",
                alias: "Salmon Estimation",
                type: "integer"
            }
        ],
        objectIdField: "OBJECTID",
        source: features,
        renderer: heatmapRenderer
    });

    map.add(featureLayer);
}

const createHeatmapRenderer = () => {
    return new HeatmapRenderer({
        field: "salmonEst",
        radius: "20px",
        maxDensity: 1,
        minDensity: 0,
        colorStops: [
            { ratio: 0, color: "rgba(255, 140, 0, 0)" },
            { ratio: 0.75, color: "rgba(255, 140, 0, 1)" },
            { ratio: 0.9, color: "rgba(255, 0,   0, 1)" }
        ]

    })
}
