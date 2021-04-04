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

test("should create armor object", () => {
  const expectedArmor = {
    type: "armor",
    rarity: "rare",
    defense: expect.any(Number),
    armorType: expect.any(String),
  };

  const armor = generateItem({
    type: "armor",
    rarity: "rare",
  });

  expect(armor).toMatchObject(expectedArmor);
});

test("should default to common item when no rarity passed", () => {
  generateItem({ type: "weapon" });
});

test("should return null when no type passed", () => {
  generateItem();
});
