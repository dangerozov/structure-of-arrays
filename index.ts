class ArrayOfTuples<T extends Array<any>> {
    private returnValue: Array<any>;
    private store: Array<Array<any>>;
    constructor(private size: number) {
        this.returnValue = new Array<any>(size);
        this.store = new Array<any>(size);
        for(var i = 0; i < size; i++) {
            this.returnValue[i] = [undefined];
            this.store[i] = [];
        }        
    }

    public length: number = 0

    public get(index: number): T {
        for (var i = 0; i < this.size; i++) this.returnValue[i] = this.store[i][index];
        return <T>this.returnValue;
    }

    public set(index: number, items: T): T {
        for (var i = 0; i < this.size; i++) this.store[i][index] = items[i];
        return <T>items;
    }

    public push(items: T): number {
        for (var i = 0; i < this.size; i++) this.store[i].push(items[i]);
        this.length++;
        return this.length;
    }
    
    public pop(): T {
        for (var i = 0; i < this.size; i++) this.returnValue[i] = this.store[i].pop();
        this.length--;
        return <T>this.returnValue;
    }

    public unshift(items: T): number {
        for (var i = 0; i < this.size; i++) this.store[i].unshift(items[i]);
        this.length++;
        return this.length;
    }

    public shift(): T {
        for (var i = 0; i < this.size; i++) this.returnValue[i] = this.store[i].shift();
        this.length--;
        return <T>this.returnValue;
    }

    public indexOf(items: T, fromIndex?: number): number {
        let firstIndex = this.store[0].indexOf(items[0], fromIndex);
        if (firstIndex === -1) return firstIndex;

        for (var i = 1; i < this.size; i++) {
            let nextIndex = this.store[i].indexOf(items[i], firstIndex);
            if (nextIndex !== firstIndex) return -1;
        }

        return firstIndex;
    }
}