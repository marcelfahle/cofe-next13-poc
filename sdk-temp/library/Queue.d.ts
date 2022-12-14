export declare class Queue {
    #private;
    add<T>(promise: () => Promise<T>): Promise<T>;
    stop(): void;
    restart(): void;
}
