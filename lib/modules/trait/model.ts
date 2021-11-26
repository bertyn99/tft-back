
export interface Effect extends Document {
    maxUnits: number;
    minUnits: number;
    style: number;
    variables: [{ name: String, value: [Number] }];
}

export interface ITrait extends Document {
    apiName: string;
    desc: string;
    effects: Effect[];
    icon: string;
    name: string;
}

