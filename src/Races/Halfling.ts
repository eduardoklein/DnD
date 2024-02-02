import Race from './Race';

export default class Halfling extends Race {
  maxLifePoints = 60;
  static totalCreated = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling.totalCreated += 1;
  }

  static override createdRacesInstances(): number {
    return Halfling.totalCreated;
  }
}