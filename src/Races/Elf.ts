import Race from './Race';

export default class Elf extends Race {
  _maxLifePoints = 99;
  static _totalCreated = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf._totalCreated += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static override createdRacesInstances(): number {
    return Elf._totalCreated;
  }
}