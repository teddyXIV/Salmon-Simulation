export interface AllCounts {
    allCounts: DamCounts
}

export interface DamCounts {
    bon: SalmonCount[],
    tda: SalmonCount[],
    jda: SalmonCount[],
    mcn: SalmonCount[],
    prd: SalmonCount[],
    wan: SalmonCount[],
    ris: SalmonCount[],
    rrh: SalmonCount[],
    wel: SalmonCount[],
}

export interface SalmonCount {
    date: string,
    salmon_count: number
}

export interface DamUpdate {
    date: string,
    count: number,
    dam: number
}