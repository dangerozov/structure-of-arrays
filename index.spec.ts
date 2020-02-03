import soa = require('./index');

describe('Structure of Arrays', () => {
    let array: soa<[number, number, number]>;

    beforeEach(() => {
        array = soa.create3<number, number, number>();
    });

    it('should increment and decrement length', () => {
        let length = array.push(1, 2, 3);
        expect(length).toBe(1);
        expect(array.length).toBe(1);

        array.pop();
        expect(array.length).toBe(0);

        length = array.unshift(1, 2, 3);
        expect(length).toBe(1);
        expect(array.length).toBe(1);

        array.shift();
        expect(array.length).toBe(0);
    });

    it('should push and pop', () => {
        array.push(1, 2, 3);
        array.push(4, 5, 6);

        expect(array.pop()).toEqual([4, 5, 6]);
        expect(array.pop()).toEqual([1, 2, 3]);
    });

    it('should unshift and shift', () => {
        array.unshift(1, 2, 3);
        array.unshift(4, 5, 6);

        expect(array.shift()).toEqual([4, 5, 6]);
        expect(array.shift()).toEqual([1, 2, 3]);
    });

    it('should set and get', () => {
        expect(array.get(10)).toBeUndefined();

        expect(array.set(999, 1, 2, 3)).toEqual([1, 2, 3]);
        expect(array.length).toBe(1000);

        expect(array.get(999)).toEqual([1, 2, 3]);
    });
    
    it('should indexOf', () => {
        array.push(1, 3, 4);
        array.push(1, 2, 4);
        array.push(1, 2, 3);
        
        expect(array.indexOf(1, 3, 4)).toBe(0);
        expect(array.indexOf(1, 2, 4)).toBe(1);
        expect(array.indexOf(1, 2, 3)).toBe(2);
    });
});


