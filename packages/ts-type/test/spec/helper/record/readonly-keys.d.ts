import { ITSKeyOfRecordExtractReadonly } from '../../../../lib/helper/record';
interface Todo {
    readonly title: string;
    readonly description: string;
    completed: boolean;
}
export declare const r1: {
    a: ITSKeyOfRecordExtractReadonly<Todo>;
    a2: "completed";
    b: never;
    c: "title";
    d: "completed";
    d2: never;
};
export {};
