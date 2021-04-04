const getBiggestChange = require("./getBiggestChange");

test("getBiggestChange returns change", () => {
  expect(getBiggestChange()).toEqual({
    platinum: 0,
    gold: 0,
    silver: 0,
    copper: 0,
  });

  expect(getBiggestChange(1000)).toEqual({
    platinum: 1,
    gold: 0,
    silver: 0,
    copper: 0,
  });

  expect(getBiggestChange(200)).toEqual({
    platinum: 0,
    gold: 2,
    silver: 0,
    copper: 0,
  });

  expect(getBiggestChange(70)).toEqual({
    platinum: 0,
    gold: 0,
    silver: 7,
    copper: 0,
  });

  expect(getBiggestChange(2003)).toEqual({
    platinum: 2,
    gold: 0,
    silver: 0,
    copper: 3,
  });

  expect(getBiggestChange(40000)).toEqual({
    platinum: 40,
    gold: 0,
    silver: 0,
    copper: 0,
  });
});
