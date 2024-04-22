import damCountReducer, { setCount } from '../redux/damCountSlice'
import { expect, describe, test } from 'vitest'

describe("damCountSlice", () => {

    const testData = [
        {
            date: "2023-07-01",
            count: 1,
            dam_id: 1
        },
        {
            date: "2023-07-01",
            count: 2,
            dam_id: 2
        },
        {
            date: "2023-07-01",
            count: 3,
            dam_id: 3
        },
        {
            date: "2023-07-01",
            count: 4,
            dam_id: 9
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

        const updatedState = damCountReducer(initialState, setCount(testData))
        expect(updatedState).toEqual({ expected })
    })
})