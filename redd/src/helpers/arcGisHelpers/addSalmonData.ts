import Map from "@arcgis/core/Map";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import Point from "@arcgis/core/geometry/Point";
import { bonToTda, tdaToJda, jdaToMcn, mcnToPrd, prdToWan, wanToRis, risToRrh, rrhToWel } from "../../data/riverPointsData";
// import { testCounts } from "../../data/testData";
import HeatmapRenderer from "@arcgis/core/renderers/HeatmapRenderer";
import { SalmonCount } from "../../types/damCountTypes";
import { RiverPoints } from "../../types/riverPointTypes";

export const addBonToTdaData = (map: Map, bonCount: SalmonCount[], date: string) => {

    // const bon = testCounts.allCounts.bon;

    const dateIndex = bonCount.findIndex(day => day.date === date);

    const dayOfCount = bonCount[dateIndex].salmon_count;
    const dayPriorCount = bonCount[dateIndex - 1].salmon_count;

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

    const features = createFeatures(bonToTda, segmentCounts);

    const heatmapRenderer = createHeatmapRenderer();

    const featureLayer = createFeatureLayer(features, heatmapRenderer);

    map.add(featureLayer);
}

export const addTdaToJdaData = (map: Map, tdaCount: SalmonCount[], date: string) => {

    // const tda = testCounts.allCounts.tda;

    const dateIndex = tdaCount.findIndex(day => day.date === date);

    const dayOfCount = tdaCount[dateIndex].salmon_count;

    const segmentCounts = [
        Math.round(dayOfCount * 0.075),
        Math.round(dayOfCount * 0.1),
        Math.round(dayOfCount * 0.15),
        Math.round(dayOfCount * 0.3),
        Math.round(dayOfCount * 0.15),
        Math.round(dayOfCount * 0.1),
        Math.round(dayOfCount * 0.075)
    ];

    const features = createFeatures(tdaToJda, segmentCounts);

    const heatmapRenderer = createHeatmapRenderer();

    const featureLayer = createFeatureLayer(features, heatmapRenderer);

    map.add(featureLayer);
}

export const addJdaToMcnData = (map: Map, jdaCount: SalmonCount[], date: string) => {

    // const jda = testCounts.allCounts.jda;

    const dateIndex = jdaCount.findIndex(day => day.date === date);

    const dayOfCount = jdaCount[dateIndex].salmon_count;
    const dayPriorCount = jdaCount[dateIndex - 1].salmon_count

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

    const features = createFeatures(jdaToMcn, segmentCounts);

    const heatmapRenderer = createHeatmapRenderer();

    const featureLayer = createFeatureLayer(features, heatmapRenderer);

    map.add(featureLayer);
}

export const addMcnToPrdData = (map: Map, mcnCount: SalmonCount[], date: string) => {

    // const mcn = testCounts.allCounts.mcn;

    const dateIndex = mcnCount.findIndex(day => day.date === date);

    const dayOfCount = mcnCount[dateIndex].salmon_count;
    const dayPriorCount = mcnCount[dateIndex - 1].salmon_count
    const twoPriorCount = mcnCount[dateIndex - 2].salmon_count
    const threePriorCount = mcnCount[dateIndex - 3].salmon_count
    const fourPriorCount = mcnCount[dateIndex - 4].salmon_count

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

    const features = createFeatures(mcnToPrd, segmentCounts);

    const heatmapRenderer = createHeatmapRenderer();

    const featureLayer = createFeatureLayer(features, heatmapRenderer);

    map.add(featureLayer);
}

export const addPrdToWanData = (map: Map, prdCount: SalmonCount[], date: string) => {

    // const prd = testCounts.allCounts.prd;

    const dateIndex = prdCount.findIndex(day => day.date === date);

    const dayOfCount = prdCount[dateIndex].salmon_count;

    const segmentCounts = [
        Math.round(dayOfCount * 0.13),
        Math.round(dayOfCount * 0.22),
        Math.round(dayOfCount * 0.30),
        Math.round(dayOfCount * 0.22),
        Math.round(dayOfCount * 0.13)
    ];

    const features = createFeatures(prdToWan, segmentCounts);

    const heatmapRenderer = createHeatmapRenderer();

    const featureLayer = createFeatureLayer(features, heatmapRenderer);

    map.add(featureLayer);
}

export const addWanToRisData = (map: Map, wanCount: SalmonCount[], date: string) => {

    // const wan = testCounts.allCounts.wan;

    const dateIndex = wanCount.findIndex(day => day.date === date);

    const dayOfCount = wanCount[dateIndex].salmon_count;
    const dayPriorCount = wanCount[dateIndex - 1].salmon_count;

    const segmentCounts = [
        Math.round(dayOfCount * 0.13),
        Math.round(dayOfCount * 0.22),
        Math.round(dayOfCount * 0.30),
        Math.round(dayOfCount * 0.22),
        Math.round(dayOfCount * 0.13),
        Math.round(dayPriorCount * 0.1),
        Math.round(dayPriorCount * 0.15),
        Math.round(dayPriorCount * 0.25),
        Math.round(dayPriorCount * 0.25),
        Math.round(dayPriorCount * 0.15),
        Math.round(dayPriorCount * 0.1)
    ];

    const features = createFeatures(wanToRis, segmentCounts);

    const heatmapRenderer = createHeatmapRenderer();

    const featureLayer = createFeatureLayer(features, heatmapRenderer);

    map.add(featureLayer);
}

export const addRisToRrhData = (map: Map, risCount: SalmonCount[], date: string) => {

    // const ris = testCounts.allCounts.ris;

    const dateIndex = risCount.findIndex(day => day.date === date);

    const dayOfCount = risCount[dateIndex].salmon_count;

    const segmentCounts = [
        Math.round(dayOfCount * 0.13),
        Math.round(dayOfCount * 0.22),
        Math.round(dayOfCount * 0.30),
        Math.round(dayOfCount * 0.22),
        Math.round(dayOfCount * 0.13)
    ];

    const features = createFeatures(risToRrh, segmentCounts);

    const heatmapRenderer = createHeatmapRenderer();

    const featureLayer = createFeatureLayer(features, heatmapRenderer);

    map.add(featureLayer);
}

export const addRrhToWelData = (map: Map, rrhCount: SalmonCount[], date: string) => {

    // const rrh = testCounts.allCounts.rrh;

    const dateIndex = rrhCount.findIndex(day => day.date === date);

    const dayOfCount = rrhCount[dateIndex].salmon_count;
    const dayPriorCount = rrhCount[dateIndex - 1].salmon_count

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

    const features = createFeatures(rrhToWel, segmentCounts);

    const heatmapRenderer = createHeatmapRenderer();

    const featureLayer = createFeatureLayer(features, heatmapRenderer);

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

const createFeatures = (riverSegment: RiverPoints[], segmentCounts: number[]) => {
    return riverSegment.map((point, i) => {
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
        }
    });
}

const createFeatureLayer = (features: any, heatmapRenderer: any) => {
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

    return featureLayer;
}
