const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');

describe('calcucalteDistancePoints', () => {
    it('should only accept 3 variables', () => {
        const actual = calculateDistancePoints(120, 'normal');
        const expected = null;
        assert.equal(actual, expected);
    });
    it('should only accept the distance gt 0 m and divisible by 0,5 m', () => {
        const actual = calculateDistancePoints(-10, 'normal', 100);
        const expected = null;
        assert.equal(actual, expected);
    });
    it('should only accept kPoint as integer gt 0m', () => {
        const actual = calculateDistancePoints(120, 'normal', 100.2);
        const expected = null;
        assert.equal(actual, expected);
    });
    it('should only accept hillSize as a one of the strings: normal, large, flying', () => {
        const actual = calculateDistancePoints(120, 'big', 100);
        const expected = null;
        assert.equal(actual, expected);
    });
});