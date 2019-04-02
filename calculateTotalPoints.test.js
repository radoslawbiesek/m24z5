const assert = require('assert');
const calculateTotalPoints = require('./calculateTotalPoints');

// calculateTotalPoints(distance, hillSize, kPoint, styleNotes, windFactor = 0, gateFactor = 0)
describe('calcucalteTotalPoints', () => {
    it('checks Kamil Stoch in Zakopane', () => {
        const actual = calculateTotalPoints(134, 'large', 120, [19, 20, 19.5, 19, 18.5], 0, -5.4);
        const expected = 137.3;
        assert.equal(actual, expected);
    });
    it('checks Severin Freund in Planica', () => {
        const actual = calculateTotalPoints(227.5, 'flying', 200, [18, 18.5, 17.5, 18.5, 18.5], 8.7, -8.4);
        const expected = 208.3;
        assert.equal(actual, expected);
    });
})