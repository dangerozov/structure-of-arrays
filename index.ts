export = class TupleArray<T extends any[]> {
    public static create2<T1, T2>() { return new TupleArray<[T1, T2]>(2); }
    public static create3<T1, T2, T3>() { return new TupleArray<[T1, T2, T3]>(3); }
    public static create4<T1, T2, T3, T4>() { return new TupleArray<[T1, T2, T3, T4]>(4); }
    public static create5<T1, T2, T3, T4, T5>() { return new TupleArray<[T1, T2, T3, T4, T5]>(5); }
    public static create6<T1, T2, T3, T4, T5, T6>() { return new TupleArray<[T1, T2, T3, T4, T5, T6]>(6); }
    public static create7<T1, T2, T3, T4, T5, T6, T7>() { return new TupleArray<[T1, T2, T3, T4, T5, T6, T7]>(7); }
    public static create8<T1, T2, T3, T4, T5, T6, T7, T8>() { return new TupleArray<[T1, T2, T3, T4, T5, T6, T7, T8]>(8); }

    private store: Array<Array<any>>;
    constructor(private size: number) {
        this.store = new Array<any>(size);
        for(let i = 0; i < size; i++) this.store[i] = [];
    }

    public length: number = 0

    public get(index: number): T {
        if (index > this.length) return undefined;

        let r = [];
        for (let i = 0; i < this.size; i++) r[i] = this.store[i][index];
        return <T>r;
    }

    public set(index: number, ...items: any[]): T {
        for (let i = 0; i < this.size; i++) this.store[i][index] = items[i];
        this.length = index + 1;
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

        let firstIndex;
        for (firstIndex = this.store[0].indexOf(args[0], fromIndex);
            firstIndex > -1;
            firstIndex = this.store[0].indexOf(args[0], firstIndex + 1)) {

                let found = true;
                for (let i = 1; i < this.size && found; i++) {
                    let nextIndex = this.store[i].indexOf(args[i], firstIndex);
                    found = found && nextIndex === firstIndex;
                }
                if (found === true) break;
        }

        return firstIndex;
    }
}