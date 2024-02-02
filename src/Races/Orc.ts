import Race from './Race';

export default class Orc extends Race {
  maxLifePoints = 74;
  static totalCreated = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc.totalCreated += 1;
  }

  static override createdRacesInstances(): number {
    return Orc.totalCreated;
  }
}