import Race from './Race';

export default class Elf extends Race {
  maxLifePoints = 99;
  static totalCreated = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf.totalCreated += 1;
  }

  static override createdRacesInstances(): number {
    return Elf.totalCreated;
  }
}