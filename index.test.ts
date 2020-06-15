import { expect } from 'chai';
import { TupleArray } from './index';

describe('Structure of Arrays', () => {
    let array: TupleArray<[number, number, number]>;

    beforeEach(() => {
        array = TupleArray.create3<number, number, number>();
    });

    it('should increment and decrement length', () => {
        let length = array.push(1, 2, 3);
        expect(length).to.equal(1);
        expect(array.length).to.equal(1);

        array.pop();
        expect(array.length).to.equal(0);

        length = array.unshift(1, 2, 3);
        expect(length).to.equal(1);
        expect(array.length).to.equal(1);

        array.shift();
        expect(array.length).to.equal(0);
    });

    it('should push and pop', () => {
        array.push(1, 2, 3);
        array.push(4, 5, 6);

        expect(array.pop()).to.deep.equal([4, 5, 6]);
        expect(array.pop()).to.deep.equal([1, 2, 3]);
    });

    it('should unshift and shift', () => {
        array.unshift(1, 2, 3);
        array.unshift(4, 5, 6);

        expect(array.shift()).to.deep.equal([4, 5, 6]);
        expect(array.shift()).to.deep.equal([1, 2, 3]);
    });

    it('should set and get', () => {
        expect(array.get(10)).to.be.undefined;

        expect(array.set(999, 1, 2, 3)).to.deep.equal([1, 2, 3]);
        expect(array.length).to.equal(1000);

        expect(array.get(999)).to.deep.equal([1, 2, 3]);
    });
    
    it('should indexOf', () => {
        array.push(1, 3, 4);
        array.push(1, 2, 4);
        array.push(1, 2, 3);
        
        expect(array.indexOf(1, 3, 4)).to.equal(0);
        expect(array.indexOf(1, 2, 4)).to.equal(1);
        expect(array.indexOf(1, 2, 3)).to.equal(2);
    });
});


