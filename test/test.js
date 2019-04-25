const assert = require('assert');

describe('Array', () => {
    describe('#indexOf()', () => {
        it('should return -1 when the value is not present', () => {
            assert.equal([1, 2, 3].indexOf(4), -1);
        });
    });
    
    describe('#indexOfMe()', () => {
        it('should return 0 when the value is present at position one', () => {
            assert.equal([1, 2, 3].indexOf(1), 0);
        });
    });
    
    describe('#indexOfParesh()', () => {
        it('should return 0 when the value is present at position one', () => {
            assert.equal([1, 2, 3].indexOf(1), 1);
        });
    });
});
