import damCountReducer, { setCount, clearData } from '../redux/damCountSlice'
import { expect, describe, test } from 'vitest'

describe("damCountSlice", () => {

    const testData = [
        {
            date: "2023-07-01",
            count: 1,
            dam: 1
        },
        {
            date: "2023-07-01",
            count: 2,
            dam: 2
        },
        {
            date: "2023-07-01",
            count: 3,
            dam: 3
        },
        {
            date: "2023-07-01",
            count: 4,
            dam: 9
        }
    ];

    test("Should add the date and count values to the correct dam state slice", () => {
        const initialState = {
            bon: [],
            tda: [],
            jda: [],
            mcn: [],
            prd: [],
            wan: [],
            ris: [],
            rrh: [],
            wel: []
        }

        const expected = {
            bon: [{ date: "2023-07-01", salmon_count: 1 }],
            tda: [{ date: "2023-07-01", salmon_count: 2 }],
            jda: [{ date: "2023-07-01", salmon_count: 3 }],
            mcn: [],
            prd: [],
            wan: [],
            ris: [],
            rrh: [],
            wel: [{ date: "2023-07-01", salmon_count: 4 }]
        }

        const updatedState = damCountReducer(initialState, setCount(testData));
        expect(updatedState).toEqual(expected);
    })

    test("Should clear the values in the damCount state", () => {
        const initialState = {
            bon: [{ date: "2023-07-01", salmon_count: 1 }],
            tda: [{ date: "2023-07-01", salmon_count: 2 }],
            jda: [{ date: "2023-07-01", salmon_count: 3 }],
            mcn: [],
            prd: [],
            wan: [],
            ris: [],
            rrh: [],
            wel: [{ date: "2023-07-01", salmon_count: 4 }]
        }

        const expected = {
            bon: [],
            tda: [],
            jda: [],
            mcn: [],
            prd: [],
            wan: [],
            ris: [],
            rrh: [],
            wel: []
        }

        const clearedState = damCountReducer(initialState, clearData());

        expect(clearedState).toEqual(expected);
    })
})