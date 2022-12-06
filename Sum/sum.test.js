const sum = require('./sum')

describe('all sum tests', () => {
    it('3 + 4 should be equal to 7', () => {
        const result = sum(3,4)
        expect(result).toBe(7)
        expect(result).toBeGreaterThan(6)
        expect(result).toEqual(7)
    })
})
