import Map from "@arcgis/core/Map";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
// import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
// import Graphic from "@arcgis/core/Graphic";
import Point from "@arcgis/core/geometry/Point";
// import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol";
// import TextSymbol from "@arcgis/core/symbols/TextSymbol";
import { bonToTda, tdaToJda, jdaToMcn, mcnToPrd } from "../../data/riverPointsData";
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

export const addTdaToJdaData = (map: Map, date: number) => {

    const tda = testCounts.allCounts.tda;

    const dayOfCount = tda[date].salmon_count;

    const segmentCounts = [
        Math.round(dayOfCount * 0.075),
        Math.round(dayOfCount * 0.1),
        Math.round(dayOfCount * 0.15),
        Math.round(dayOfCount * 0.3),
        Math.round(dayOfCount * 0.15),
        Math.round(dayOfCount * 0.1),
        Math.round(dayOfCount * 0.075)
    ];

    const features = tdaToJda.map((point, i) => {
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

export const addJdaToMcnData = (map: Map, date: number) => {

    const jda = testCounts.allCounts.jda;

    const dayOfCount = jda[date].salmon_count;
    const dayPriorCount = jda[date - 1].salmon_count

    const segmentCounts = [
        Math.round(dayOfCount * 0.04),
        Math.round(dayOfCount * 0.04),
        Math.round(dayOfCount * 0.07),
        Math.round(dayOfCount * 0.1),
        Math.round(dayOfCount * 0.15),
        Math.round(dayOfCount * 0.2),
        Math.round(dayOfCount * 0.15),
        Math.round(dayOfCount * 0.1),
        Math.round(dayOfCount * 0.07),
        Math.round(dayOfCount * 0.04),
        Math.round(dayOfCount * 0.04),
        Math.round(dayPriorCount * 0.04),
        Math.round(dayPriorCount * 0.04),
        Math.round(dayPriorCount * 0.07),
        Math.round(dayPriorCount * 0.1),
        Math.round(dayPriorCount * 0.15),
        Math.round(dayPriorCount * 0.2),
        Math.round(dayPriorCount * 0.15),
        Math.round(dayPriorCount * 0.1),
        Math.round(dayPriorCount * 0.07),
        Math.round(dayPriorCount * 0.04),
        Math.round(dayPriorCount * 0.04)
    ];

    const features = jdaToMcn.map((point, i) => {
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

export const addMcnToPrdData = (map: Map, date: number) => {

    const mcn = testCounts.allCounts.mcn;

    const dayOfCount = mcn[date].salmon_count;
    const dayPriorCount = mcn[date - 1].salmon_count
    const twoPriorCount = mcn[date - 2].salmon_count
    const threePriorCount = mcn[date - 3].salmon_count
    const fourPriorCount = mcn[date - 4].salmon_count

    const segmentCounts = [
        Math.round(dayOfCount * 0.1),
        Math.round(dayOfCount * 0.15),
        Math.round(dayOfCount * 0.25),
        Math.round(dayOfCount * 0.25),
        Math.round(dayOfCount * 0.15),
        Math.round(dayOfCount * 0.1),
        Math.round(dayPriorCount * 0.1),
        Math.round(dayPriorCount * 0.15),
        Math.round(dayPriorCount * 0.25),
        Math.round(dayPriorCount * 0.25),
        Math.round(dayPriorCount * 0.15),
        Math.round(dayPriorCount * 0.1),
        Math.round(twoPriorCount * 0.1),
        Math.round(twoPriorCount * 0.15),
        Math.round(twoPriorCount * 0.25),
        Math.round(twoPriorCount * 0.25),
        Math.round(twoPriorCount * 0.15),
        Math.round(twoPriorCount * 0.1),
        Math.round(threePriorCount * 0.1),
        Math.round(threePriorCount * 0.15),
        Math.round(threePriorCount * 0.25),
        Math.round(threePriorCount * 0.25),
        Math.round(threePriorCount * 0.15),
        Math.round(threePriorCount * 0.1),
        Math.round(fourPriorCount * 0.075),
        Math.round(fourPriorCount * 0.1),
        Math.round(fourPriorCount * 0.15),
        Math.round(fourPriorCount * 0.3),
        Math.round(fourPriorCount * 0.15),
        Math.round(fourPriorCount * 0.1),
        Math.round(fourPriorCount * 0.075)
    ];

    const features = mcnToPrd.map((point, i) => {
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
            { ratio: 0, color: "rgba(0, 0, 255, 0)" },    // Blue (lowest values)
            { ratio: 0.1, color: "rgba(0, 0, 255, 1)" },  // Blue (lowest values)
            { ratio: 0.3, color: "rgba(0, 255, 255, 1)" },// Cyan
            { ratio: 0.5, color: "rgba(0, 255, 0, 1)" },  // Green
            { ratio: 0.6, color: "rgba(255, 255, 0, 1)" },// Yellow
            { ratio: 0.7, color: "rgba(255, 165, 0, 1)" },// Orange
            { ratio: 0.8, color: "rgba(255, 69, 0, 1)" }, // Reddish
            { ratio: 0.9, color: "rgba(139, 0, 139, 1)" },// Dark Magenta
            { ratio: 1, color: "rgba(255, 0, 0, 1)" }     // Red (highest values)
        ]

    })
}
