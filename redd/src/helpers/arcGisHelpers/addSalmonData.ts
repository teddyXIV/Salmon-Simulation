import Map from "@arcgis/core/Map";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import Point from "@arcgis/core/geometry/Point";
import { bonToTda, tdaToJda, jdaToMcn, mcnToPrd, prdToWan, wanToRis, risToRrh, rrhToWel } from "../../data/riverPointsData";
// import { testCounts } from "../../data/testData";
import HeatmapRenderer from "@arcgis/core/renderers/HeatmapRenderer";
import { SalmonCount } from "../../types/damCountTypes";
import { RiverPoints } from "../../types/riverPointTypes";

export const addBonToTdaData = (map: Map, bonCount: SalmonCount[], date: number) => {

    // const bon = testCounts.allCounts.bon;

    const dayOfCount = bonCount[date].salmon_count;
    const dayPriorCount = bonCount[date - 1].salmon_count;

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

export const addTdaToJdaData = (map: Map, tdaCount: SalmonCount[], date: number) => {

    // const tda = testCounts.allCounts.tda;

    const dayOfCount = tdaCount[date].salmon_count;

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

export const addJdaToMcnData = (map: Map, jdaCount: SalmonCount[], date: number) => {

    // const jda = testCounts.allCounts.jda;

    const dayOfCount = jdaCount[date].salmon_count;
    const dayPriorCount = jdaCount[date - 1].salmon_count

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

export const addMcnToPrdData = (map: Map, mcnCount: SalmonCount[], date: number) => {

    // const mcn = testCounts.allCounts.mcn;

    const dayOfCount = mcnCount[date].salmon_count;
    const dayPriorCount = mcnCount[date - 1].salmon_count
    const twoPriorCount = mcnCount[date - 2].salmon_count
    const threePriorCount = mcnCount[date - 3].salmon_count
    const fourPriorCount = mcnCount[date - 4].salmon_count

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

export const addPrdToWanData = (map: Map, prdCount: SalmonCount[], date: number) => {

    // const prd = testCounts.allCounts.prd;

    const dayOfCount = prdCount[date].salmon_count;

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

export const addWanToRisData = (map: Map, wanCount: SalmonCount[], date: number) => {

    // const wan = testCounts.allCounts.wan;

    const dayOfCount = wanCount[date].salmon_count;
    const dayPriorCount = wanCount[date - 1].salmon_count;

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

export const addRisToRrhData = (map: Map, risCount: SalmonCount[], date: number) => {

    // const ris = testCounts.allCounts.ris;

    const dayOfCount = risCount[date].salmon_count;

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

export const addRrhToWelData = (map: Map, rrhCount: SalmonCount[], date: number) => {

    // const rrh = testCounts.allCounts.rrh;

    const dayOfCount = rrhCount[date].salmon_count;
    const dayPriorCount = rrhCount[date - 1].salmon_count

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
