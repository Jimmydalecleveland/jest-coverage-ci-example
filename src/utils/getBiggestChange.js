function getBiggestChange(input) {
  let remaining = input
  const result = {
    platinum: 0,
    gold: 0,
    silver: 0,
    copper: 0,
  }

  if (!input || input <= 0) {
    return result
  }

  while (remaining > 0) {
    if (Math.trunc(remaining / 1000) > 0) {
      result.platinum = Math.trunc(remaining / 1000)
      remaining = remaining % 1000
    } else if (Math.trunc(remaining / 100) > 0) {
      result.gold = Math.trunc(remaining / 100)
      remaining = remaining % 100
    } else if (Math.trunc(remaining / 10) > 0) {
      result.silver = Math.trunc(remaining / 10)
      remaining = remaining % 10
    } else {
      result.copper = remaining
      remaining = 0
      return result
    }
  }

  return result
}

module.exports = getBiggestChange
