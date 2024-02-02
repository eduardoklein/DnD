import { EnergyType } from '../Energy';
import Archetype from './Archetypes';

export default class Warrior extends Archetype {
  energyType: EnergyType = 'stamina';
  static totalCreated = 0;

  constructor(name: string) {
    super(name);
    Warrior.totalCreated += 1;
  }

  static createdArchetypeInstances() {
    return Warrior.totalCreated;
  }

  get mageEnergyType(): EnergyType {
    return this.energyType;
  }
}