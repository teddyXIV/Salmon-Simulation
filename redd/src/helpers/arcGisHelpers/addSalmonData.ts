import Map from "@arcgis/core/Map";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import Point from "@arcgis/core/geometry/Point";
import { allPoints } from "../../data/riverPointsData";
import HeatmapRenderer from "@arcgis/core/renderers/HeatmapRenderer";
import { DamCounts } from "../../types/damCountTypes";
import { RiverPoints } from "../../types/riverPointTypes";

export const addAllData = (map: Map, allCounts: DamCounts, date: string) => {

    const dateIndex = allCounts.bon.findIndex(day => day.date === date);

    const bonDayOfCount = allCounts.bon[dateIndex].salmon_count;
    const bonDayPriorCount = allCounts.bon[dateIndex - 1].salmon_count;

    const tdaDayOfCount = allCounts.tda[dateIndex].salmon_count;

    const jdaDayOfCount = allCounts.jda[dateIndex].salmon_count;
    const jdaDayPriorCount = allCounts.jda[dateIndex - 1].salmon_count;

    const mcnDayOfCount = allCounts.mcn[dateIndex].salmon_count;
    const mcnDayPriorCount = allCounts.mcn[dateIndex - 1].salmon_count;
    const mcnTwoPriorCount = allCounts.mcn[dateIndex - 2].salmon_count;
    const mcnThreePriorCount = allCounts.mcn[dateIndex - 3].salmon_count;
    const mcnFourPriorCount = allCounts.mcn[dateIndex - 4].salmon_count;

    const prdDayOfCount = allCounts.prd[dateIndex].salmon_count;

    const wanDayOfCount = allCounts.wan[dateIndex].salmon_count;
    const wanDayPriorCount = allCounts.wan[dateIndex - 1].salmon_count;

    const risDayOfCount = allCounts.ris[dateIndex].salmon_count;


    const rrhDayOfCount = allCounts.rrh[dateIndex].salmon_count;
    const rrhDayPriorCount = allCounts.rrh[dateIndex - 1].salmon_count;

    const segmentCounts = [
        Math.round(bonDayOfCount * 0.1),
        Math.round(bonDayOfCount * 0.15),
        Math.round(bonDayOfCount * 0.25),
        Math.round(bonDayOfCount * 0.25),
        Math.round(bonDayOfCount * 0.15),
        Math.round(bonDayOfCount * 0.1),
        Math.round(bonDayPriorCount * 0.075),
        Math.round(bonDayPriorCount * 0.1),
        Math.round(bonDayPriorCount * 0.15),
        Math.round(bonDayPriorCount * 0.3),
        Math.round(bonDayPriorCount * 0.15),
        Math.round(bonDayPriorCount * 0.1),
        Math.round(bonDayPriorCount * 0.075),
        Math.round(tdaDayOfCount * 0.075),
        Math.round(tdaDayOfCount * 0.1),
        Math.round(tdaDayOfCount * 0.15),
        Math.round(tdaDayOfCount * 0.3),
        Math.round(tdaDayOfCount * 0.15),
        Math.round(tdaDayOfCount * 0.1),
        Math.round(tdaDayOfCount * 0.075),
        Math.round(jdaDayOfCount * 0.04),
        Math.round(jdaDayOfCount * 0.04),
        Math.round(jdaDayOfCount * 0.07),
        Math.round(jdaDayOfCount * 0.1),
        Math.round(jdaDayOfCount * 0.15),
        Math.round(jdaDayOfCount * 0.2),
        Math.round(jdaDayOfCount * 0.15),
        Math.round(jdaDayOfCount * 0.1),
        Math.round(jdaDayOfCount * 0.07),
        Math.round(jdaDayOfCount * 0.04),
        Math.round(jdaDayOfCount * 0.04),
        Math.round(jdaDayPriorCount * 0.04),
        Math.round(jdaDayPriorCount * 0.04),
        Math.round(jdaDayPriorCount * 0.07),
        Math.round(jdaDayPriorCount * 0.1),
        Math.round(jdaDayPriorCount * 0.15),
        Math.round(jdaDayPriorCount * 0.2),
        Math.round(jdaDayPriorCount * 0.15),
        Math.round(jdaDayPriorCount * 0.1),
        Math.round(jdaDayPriorCount * 0.07),
        Math.round(jdaDayPriorCount * 0.04),
        Math.round(jdaDayPriorCount * 0.04),
        Math.round(mcnDayOfCount * 0.1),
        Math.round(mcnDayOfCount * 0.15),
        Math.round(mcnDayOfCount * 0.25),
        Math.round(mcnDayOfCount * 0.25),
        Math.round(mcnDayOfCount * 0.15),
        Math.round(mcnDayOfCount * 0.1),
        Math.round(mcnDayPriorCount * 0.1),
        Math.round(mcnDayPriorCount * 0.15),
        Math.round(mcnDayPriorCount * 0.25),
        Math.round(mcnDayPriorCount * 0.25),
        Math.round(mcnDayPriorCount * 0.15),
        Math.round(mcnDayPriorCount * 0.1),
        Math.round(mcnTwoPriorCount * 0.1),
        Math.round(mcnTwoPriorCount * 0.15),
        Math.round(mcnTwoPriorCount * 0.25),
        Math.round(mcnTwoPriorCount * 0.25),
        Math.round(mcnTwoPriorCount * 0.15),
        Math.round(mcnTwoPriorCount * 0.1),
        Math.round(mcnThreePriorCount * 0.1),
        Math.round(mcnThreePriorCount * 0.15),
        Math.round(mcnThreePriorCount * 0.25),
        Math.round(mcnThreePriorCount * 0.25),
        Math.round(mcnThreePriorCount * 0.15),
        Math.round(mcnThreePriorCount * 0.1),
        Math.round(mcnFourPriorCount * 0.075),
        Math.round(mcnFourPriorCount * 0.1),
        Math.round(mcnFourPriorCount * 0.15),
        Math.round(mcnFourPriorCount * 0.3),
        Math.round(mcnFourPriorCount * 0.15),
        Math.round(mcnFourPriorCount * 0.1),
        Math.round(mcnFourPriorCount * 0.075),
        Math.round(prdDayOfCount * 0.13),
        Math.round(prdDayOfCount * 0.22),
        Math.round(prdDayOfCount * 0.30),
        Math.round(prdDayOfCount * 0.22),
        Math.round(prdDayOfCount * 0.13),
        Math.round(wanDayOfCount * 0.13),
        Math.round(wanDayOfCount * 0.22),
        Math.round(wanDayOfCount * 0.30),
        Math.round(wanDayOfCount * 0.22),
        Math.round(wanDayOfCount * 0.13),
        Math.round(wanDayPriorCount * 0.1),
        Math.round(wanDayPriorCount * 0.15),
        Math.round(wanDayPriorCount * 0.25),
        Math.round(wanDayPriorCount * 0.25),
        Math.round(wanDayPriorCount * 0.15),
        Math.round(wanDayPriorCount * 0.1),
        Math.round(risDayOfCount * 0.13),
        Math.round(risDayOfCount * 0.22),
        Math.round(risDayOfCount * 0.30),
        Math.round(risDayOfCount * 0.22),
        Math.round(risDayOfCount * 0.13),
        Math.round(rrhDayOfCount * 0.1),
        Math.round(rrhDayOfCount * 0.15),
        Math.round(rrhDayOfCount * 0.25),
        Math.round(rrhDayOfCount * 0.25),
        Math.round(rrhDayOfCount * 0.15),
        Math.round(rrhDayOfCount * 0.1),
        Math.round(rrhDayPriorCount * 0.075),
        Math.round(rrhDayPriorCount * 0.1),
        Math.round(rrhDayPriorCount * 0.15),
        Math.round(rrhDayPriorCount * 0.3),
        Math.round(rrhDayPriorCount * 0.15),
        Math.round(rrhDayPriorCount * 0.1),
        Math.round(rrhDayPriorCount * 0.075)
    ];

    const features = createFeatures(allPoints, segmentCounts);

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
            { ratio: 0, color: "rgba(0, 0, 255, 0)" },
            { ratio: 0.1, color: "rgba(0, 0, 255, 1)" },
            { ratio: 0.3, color: "rgba(0, 255, 255, 1)" },
            { ratio: 0.45, color: "rgba(0, 255, 0, 1)" },
            { ratio: 0.55, color: "rgba(255, 255, 0, 1)" },
            { ratio: 0.65, color: "rgba(255, 165, 0, 1)" },
            { ratio: 0.75, color: "rgba(255, 69, 0, 1)" },
            { ratio: 0.85, color: "rgba(139, 0, 139, 1)" },
            { ratio: 0.95, color: "rgba(255, 0, 0, 1)" },
            { ratio: 0.98, color: "rgba(255, 192, 203, 1)" },
            { ratio: 1, color: "rgba(92, 0, 0, 1)" }
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
