import Race from './Race';

export default class Dwarf extends Race {
  maxLifePoints = 80;
  static totalCreated = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf.totalCreated += 1;
  }

  static override createdRacesInstances(): number {
    return Dwarf.totalCreated;
  }
}