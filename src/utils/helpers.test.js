const { getRandomInt } = require('./helper')

test("gets a random integer in a given range", () => {
  for (let i = 0; i < 20; i++) {
    const result = getRandomInt(3)
    expect(result).toBeGreaterThanOrEqual(0)
    expect(result).toBeLessThan(3)
  }
})
