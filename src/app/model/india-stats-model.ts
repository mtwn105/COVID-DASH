export interface Parameters {
    country: string;
}

export interface Cases {
    new: string;
    active: number;
    critical: number;
    recovered: number;
    total: number;
}

export interface Deaths {
    new: string;
    total: number;
}

export interface Response {
    country: string;
    cases: Cases;
    deaths: Deaths;
    day: string;
    time: Date;
}

export interface CovidStats {
    get: string;
    parameters: Parameters;
    errors: any[];
    results: number;
    response: Response[];
}
