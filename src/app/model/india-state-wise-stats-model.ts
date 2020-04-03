export interface IndiaStats {
    cases_time_series: Casestimesery[];
    key_values: Keyvalue[];
    statewise: Statewise[];
    tested: Tested[];
}

export interface Tested {
    source: string;
    totalindividualstested: string;
    totalpositivecases: string;
    totalsamplestested: string;
    updatetimestamp: string;
}

export interface Statewise {
    active: string;
    confirmed: string;
    deaths: string;
    delta: Delta;
    lastupdatedtime: string;
    recovered: string;
    state: string;
}

export interface Delta {
    active: number;
    confirmed: number;
    deaths: number;
    recovered: number;
}

export interface Keyvalue {
    confirmeddelta: string;
    counterforautotimeupdate: string;
    deceaseddelta: string;
    lastupdatedtime: string;
    recovereddelta: string;
    statesdelta: string;
}

export interface Casestimesery {
    dailyconfirmed: string;
    dailydeceased: string;
    dailyrecovered: string;
    date: string;
    totalconfirmed: string;
    totaldeceased: string;
    totalrecovered: string;
}