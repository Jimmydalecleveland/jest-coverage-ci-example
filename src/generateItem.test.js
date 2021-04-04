const { generateItem } = require("./generateItem");

test("should create weapon object", () => {
  const expectedWeapon = {
    type: "weapon",
    rarity: "epic",
    damage: expect.any(Number),
    damageType: expect.any(String),
  };

  const weapon = generateItem({
    type: "weapon",
    rarity: "epic",
  });

  expect(weapon).toMatchObject(expectedWeapon);
});
