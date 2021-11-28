import { ITSKnownKeys } from '../../../../lib/helper/record/omit-index';
interface FancyIndices {
    [x: symbol]: number;
    [x: `data-${string}`]: string;
    bar(): void;
}
interface Foo {
    [key: string]: any;
    bar(): void;
}
export declare let k1: ITSKnownKeys<FancyIndices>;
export declare let k2: ITSKnownKeys<Foo>;
export {};
