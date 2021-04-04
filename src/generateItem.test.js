const { generateItem } = require("./generateItem");

test("duh", () => {
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

  expect(weapon).toBe(expectedWeapon);
});
