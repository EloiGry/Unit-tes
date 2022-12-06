const fetchData = require('./async')

describe('is it fetching well?', () => {
    it('should return correct todo', async () => {
        const todo = await fetchData(2)
        expect(todo.id).toBe(2)
    })
})