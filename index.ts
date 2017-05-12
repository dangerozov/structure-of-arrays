class TupleArray<T extends any[]> {
    private store: Array<Array<any>>;
    constructor(private size: number) {
        this.store = new Array<any>(size);
        for(let i = 0; i < size; i++) this.store[i] = [];
    }

    public length: number = 0

    public get(index: number): T {
        let r = [];
        for (let i = 0; i < this.size; i++) r[i] = this.store[i][index];
        return <T>r;
    }

    public set(index: number, items: T): T {
        for (let i = 0; i < this.size; i++) this.store[i][index] = items[i];
        return items;
    }

    public push(items: T): number {
        for (let i = 0; i < this.size; i++) this.store[i].push(items[i]);
        this.length++;
        return this.length;
    }
    
    public pop(): T {
        let r = [];
        for (let i = 0; i < this.size; i++) r[i] = this.store[i].pop();
        this.length--;
        return <T>r;
    }

    public unshift(items: T): number {
        for (let i = 0; i < this.size; i++) this.store[i].unshift(items[i]);
        this.length++;
        return this.length;
    }

    public shift(): T {
        let r = [];
        for (let i = 0; i < this.size; i++) r[i] = this.store[i].shift();
        this.length--;
        return <T>r;
    }

    public indexOf(items: T, fromIndex?: number): number {
        let firstIndex = this.store[0].indexOf(items[0], fromIndex);
        if (firstIndex === -1) return firstIndex;

        for (let i = 1; i < this.size; i++) {
            let nextIndex = this.store[i].indexOf(items[i], firstIndex);
            if (nextIndex !== firstIndex) return -1;
        }

        return firstIndex;
    }
}

export function create<T1>(size: 1): TupleArray1<T1>;
export function create<T1, T2>(size: 2): TupleArray2<T1, T2>;
export function create<T1, T2, T3>(size: 3): TupleArray3<T1, T2, T3>;
export function create<T1, T2, T3, T4>(size: 4): TupleArray4<T1, T2, T3, T4>;
export function create<T1, T2, T3, T4, T5>(size: 5): TupleArray5<T1, T2, T3, T4, T5>;
export function create<T1, T2, T3, T4, T5, T6>(size: 6): TupleArray6<T1, T2, T3, T4, T5, T6>;
export function create<T1, T2, T3, T4, T5, T6, T7>(size: 7): TupleArray7<T1, T2, T3, T4, T5, T6, T7>;
export function create<T1, T2, T3, T4, T5, T6, T7, T8>(size: 8): TupleArray8<T1, T2, T3, T4, T5, T6, T7, T8>;
export function create<T1, T2, T3, T4, T5, T6, T7, T8>(size: number) {
    return <TupleArray8<T1, T2, T3, T4, T5, T6, T7, T8>>new TupleArray<[T1, T2, T3, T4, T5, T6, T7, T8]>(size);
}

export interface TupleArray1<T1> {
    length: number
    get(index: number): [T1]
    set(index: number, value: [T1]): [T1]
    push(value: [T1]): number
    pop(): [T1]
    unshift(items: [T1]): number
    shift(): [T1]
}

export interface TupleArray2<T1, T2> {
    length: number
    get(index: number): [T1, T2]
    set(index: number, value: [T1, T2]): [T1, T2]
    push(value: [T1, T2]): number
    pop(): [T1, T2]
    unshift(items: [T1, T2]): number
    shift(): [T1, T2]
}

export interface TupleArray3<T1, T2, T3> {
    length: number
    get(index: number): [T1, T2, T3]
    set(index: number, value: [T1, T2, T3]): [T1, T2, T3]
    push(value: [T1, T2, T3]): number
    pop(): [T1, T2, T3]
    unshift(items: [T1, T2, T3]): number
    shift(): [T1, T2, T3]
}

export interface TupleArray4<T1, T2, T3, T4> {
    length: number
    get(index: number): [T1, T2, T3, T4]
    set(index: number, value: [T1, T2, T3, T4]): [T1, T2, T3, T4]
    push(value: [T1, T2, T3, T4]): number
    pop(): [T1, T2, T3, T4]
    unshift(items: [T1, T2, T3, T4]): number
    shift(): [T1, T2, T3, T4]
}

export interface TupleArray5<T1, T2, T3, T4, T5> {
    length: number
    get(index: number): [T1, T2, T3, T4, T5]
    set(index: number, value: [T1, T2, T3, T4, T5]): [T1, T2, T3, T4, T5]
    push(value: [T1, T2, T3, T4, T5]): number
    pop(): [T1, T2, T3, T4, T5]
    unshift(items: [T1, T2, T3, T4, T5]): number
    shift(): [T1, T2, T3, T4, T5]
}

export interface TupleArray6<T1, T2, T3, T4, T5, T6> {
    length: number
    get(index: number): [T1, T2, T3, T4, T5, T6]
    set(index: number, value: [T1, T2, T3, T4, T5, T6]): [T1, T2, T3, T4, T5, T6]
    push(value: [T1, T2, T3, T4, T5, T6]): number
    pop(): [T1, T2, T3, T4, T5, T6]
    unshift(items: [T1, T2, T3, T4, T5, T6]): number
    shift(): [T1, T2, T3, T4, T5, T6]
}

export interface TupleArray7<T1, T2, T3, T4, T5, T6, T7> {
    length: number
    get(index: number): [T1, T2, T3, T4, T5, T6, T7]
    set(index: number, value: [T1, T2, T3, T4, T5, T6, T7]): [T1, T2, T3, T4, T5, T6, T7]
    push(value: [T1, T2, T3, T4, T5, T6, T7]): number
    pop(): [T1, T2, T3, T4, T5, T6, T7]
    unshift(items: [T1, T2, T3, T4, T5, T6, T7]): number
    shift(): [T1, T2, T3, T4, T5, T6, T7]
}

export interface TupleArray8<T1, T2, T3, T4, T5, T6, T7, T8> {
    length: number
    get(index: number): [T1, T2, T3, T4, T5, T6, T7, T8]
    set(index: number, value: [T1, T2, T3, T4, T5, T6, T7, T8]): [T1, T2, T3, T4, T5, T6, T7, T8]
    push(value: [T1, T2, T3, T4, T5, T6, T7, T8]): number
    pop(): [T1, T2, T3, T4, T5, T6, T7, T8]
    unshift(items: [T1, T2, T3, T4, T5, T6, T7, T8]): number
    shift(): [T1, T2, T3, T4, T5, T6, T7, T8]
}
