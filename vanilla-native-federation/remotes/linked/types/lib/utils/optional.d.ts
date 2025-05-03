export declare class Optional<T> {
    private item?;
    private constructor();
    static of<T>(item?: T): Optional<T>;
    static empty<U>(): Optional<U>;
    isPresent(): boolean;
    set<U>(other: U): Optional<U>;
    ifPresent(callback: (_: T) => void): void;
    map<U>(callback: (_: NonNullable<T>) => U | Optional<U>): Optional<U>;
    orElse(other: Required<T>): NonNullable<T>;
    orThrow(error: Error | string): NonNullable<T>;
    get(): T | undefined;
}
