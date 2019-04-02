const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints');

describe('calcucalteStylePoints', () => {
    it('should only accept 5 element array', () => {
        const actual = calculateStylePoints([15, 16, 15, 20]);
        const expected = null;
        assert.equal(actual, expected);
    });
    it('should only an array with numbers from range 0 to 20', () => {
        const actual = calculateStylePoints([15, 16, 15, 20, 45]);
        const expected = null;
        assert.equal(actual, expected);
    });
    it('should only an array with numbers divisible by 0.5 ', () => {
        const actual = calculateStylePoints([15, 16, 15, 18, 24.3]);
        const expected = null;
        assert.equal(actual, expected);
    });
    it('should return points correctly with different notes', () => {
        const actual = calculateStylePoints([15, 16, 17, 18, 19]);
        const expected = 51;
        assert.equal(actual, expected);
    });
    it('should return points correctly with the same notes', () => {
        const actual = calculateStylePoints([20, 20, 20, 20, 20]);
        const expected = 60;
        assert.equal(actual, expected);
    });
})