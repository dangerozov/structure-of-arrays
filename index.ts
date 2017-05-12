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

    public set(index: number, ...items: any[]): T {
        for (let i = 0; i < this.size; i++) this.store[i][index] = items[i];
        return <T>items;
    }

    public push(...items: any[]): number {
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

    public unshift(...items: any[]): number {
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

    public indexOf(t1: any, t2?: any, t3?: any, t4?: any, t5?: any, t6?: any, t7?: any, t8?: any, fromIndex?: number): number {
        let args = [t1, t2, t3, t4, t5, t6, t7, t8, fromIndex];
        fromIndex = args[this.size];

        let firstIndex = this.store[0].indexOf(args[0], fromIndex);
        if (firstIndex === -1) return firstIndex;

        for (let i = 1; i < this.size; i++) {
            let nextIndex = this.store[i].indexOf(args[i], firstIndex);
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
    return new TupleArray<[T1, T2, T3, T4, T5, T6, T7, T8]>(size);
}

export interface TupleArray1<T1> {
    length: number
    get(index: number): [T1]
    set(index: number, t1: T1): [T1]
    push(t1: T1): number
    pop(): [T1]
    unshift(t1: T1): number
    shift(): [T1]
    indexOf(t1: T1, fromIndex?: number): number
}

export interface TupleArray2<T1, T2> {
    length: number
    get(index: number): [T1, T2]
    set(index: number, t1: T1, t2: T2): [T1, T2]
    push(t1: T1, t2: T2): number
    pop(): [T1, T2]
    unshift(t1: T1, t2: T2): number
    shift(): [T1, T2]
    indexOf(t1: T1, t2: T2, fromIndex?: number): number
}

export interface TupleArray3<T1, T2, T3> {
    length: number
    get(index: number): [T1, T2, T3]
    set(index: number, t1: T1, t2: T2, t3: T3): [T1, T2, T3]
    push(t1: T1, t2: T2, t3: T3): number
    pop(): [T1, T2, T3]
    unshift(t1: T1, t2: T2, t3: T3): number
    shift(): [T1, T2, T3]
    indexOf(t1: T1, t2: T2, t3: T3, fromIndex?: number): number
}

export interface TupleArray4<T1, T2, T3, T4> {
    length: number
    get(index: number): [T1, T2, T3, T4]
    set(index: number, t1: T1, t2: T2, t3: T3, t4: T4): [T1, T2, T3, T4]
    push(t1: T1, t2: T2, t3: T3, t4: T4): number
    pop(): [T1, T2, T3, T4]
    unshift(t1: T1, t2: T2, t3: T3, t4: T4): number
    shift(): [T1, T2, T3, T4]
    indexOf(t1: T1, t2: T2, t3: T3, t4: T4, fromIndex?: number): number
}

export interface TupleArray5<T1, T2, T3, T4, T5> {
    length: number
    get(index: number): [T1, T2, T3, T4, T5]
    set(index: number, t1: T1, t2: T2, t3: T3, t4: T4, t5: T5): [T1, T2, T3, T4, T5]
    push(t1: T1, t2: T2, t3: T3, t4: T4, t5: T5): number
    pop(): [T1, T2, T3, T4, T5]
    unshift(t1: T1, t2: T2, t3: T3, t4: T4, t5: T5): number
    shift(): [T1, T2, T3, T4, T5]
    indexOf(t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, fromIndex?: number): number
}

export interface TupleArray6<T1, T2, T3, T4, T5, T6> {
    length: number
    get(index: number): [T1, T2, T3, T4, T5, T6]
    set(index: number, t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6): [T1, T2, T3, T4, T5, T6]
    push(t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6): number
    pop(): [T1, T2, T3, T4, T5, T6]
    unshift(t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6): number
    shift(): [T1, T2, T3, T4, T5, T6]
    indexOf(t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, fromIndex?: number): number
}

export interface TupleArray7<T1, T2, T3, T4, T5, T6, T7> {
    length: number
    get(index: number): [T1, T2, T3, T4, T5, T6, T7]
    set(index: number, t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7): [T1, T2, T3, T4, T5, T6, T7]
    push(t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7): number
    pop(): [T1, T2, T3, T4, T5, T6, T7]
    unshift(t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7): number
    shift(): [T1, T2, T3, T4, T5, T6, T7]
    indexOf(t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7, fromIndex?: number): number
}

export interface TupleArray8<T1, T2, T3, T4, T5, T6, T7, T8> {
    length: number
    get(index: number): [T1, T2, T3, T4, T5, T6, T7, T8]
    set(index: number, t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7, t8: T8): [T1, T2, T3, T4, T5, T6, T7, T8]
    push(t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7, t8: T8): number
    pop(): [T1, T2, T3, T4, T5, T6, T7, T8]
    unshift(t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7, t8: T8): number
    shift(): [T1, T2, T3, T4, T5, T6, T7, T8]
    indexOf(t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7, t8: T8, fromIndex?: number): number
}
