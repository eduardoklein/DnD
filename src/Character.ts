import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  _race: Race;
  _archetype: Archetype;
  _maxLifePoints: number;
  _lifePoints: number;
  _strength: number;
  _defense: number;
  _dexterity: number;
  _energy: Energy;

  constructor(name: string) {
    this._archetype = new Mage(name);

    this._dexterity = getRandomInt(1, 10);
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = { type_: this._archetype.energyType, amount: getRandomInt(1, 10) };
    
    this._race = new Elf(name, this._dexterity);

    this._maxLifePoints = this._race.maxLifePoints * 0.5;
    this._lifePoints = this._race.maxLifePoints;
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;
    if (damage > 0) { 
      this._lifePoints -= damage;
    } else {
      this._lifePoints -= 1;
    }
    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    }
    return this._lifePoints;
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  levelUp(): void {
    this._maxLifePoints += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;

    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }
  }

  get race() { return this._race; }
  get archetype() { return this._archetype; }
  get maxLifePoints() { return this._maxLifePoints; }
  get lifePoints() { return this._lifePoints; }
  get strength() { return this._strength; }
  get defense() { return this._defense; }
  get dexterity() { return this._dexterity; }
  get energy(): Energy {
    return {
      type_: this._energy.type_,
      amount: this._energy.amount,
    }; 
  }
}