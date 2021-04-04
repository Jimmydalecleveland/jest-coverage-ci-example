const { getRandomInt, getRandomIntInRange } = require("./utils/helper");

const DAMAGE_TYPES = ["piercing", "slashing", "bludgeoning"];
const ARMOR_TYPES = ["light", "medium", "heavy"];

function generateStat(rarity) {
  let stat = 0;
  if (rarity === "epic") {
    stat = getRandomInt(8, 20);
  } else if (rarity === "rare") {
    stat = getRandomInt(5, 15);
  } else {
    stat = getRandomInt(1, 10);
  }
  return stat;
}

function generateBaseWeapon() {
  return {
    type: "weapon",
    damageType: DAMAGE_TYPES[getRandomInt(DAMAGE_TYPES.length)],
    damage: 0,
    attackSpeed: 0,
  };
}

function generateBaseArmor() {
  return {
    type: "armor",
    defense: 0,
    armorType: ARMOR_TYPES[getRandomInt(ARMOR_TYPES.length)],
  };
}

function generateItem(itemOptions = {}) {
  const { type, rarity } = itemOptions;

  if (!type) {
    return null;
  }

  const baseItem =
    type === "weapon" ? generateBaseWeapon() : generateBaseArmor();

  baseItem.rarity = rarity || "common";

  if (baseItem.type === "weapon") {
    baseItem.damage = generateStat(rarity);
  } else {
    baseItem.defense = generateStat(rarity);
    // This line is "covered" but we don't actually know if "heavy" gets true
    baseItem.hasStealthDisadvantage = baseItem.armorType === "heavy";
    baseItem.stealthBonus = baseItem.armorType === "light" ? 3 : 0;
  }
  return baseItem;
}

module.exports = {
  generateItem,
  generateBaseArmor,
  generateBaseWeapon,
  generateStat,
};
