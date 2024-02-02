import { EnergyType } from '../Energy';
import Archetype from './Archetypes';

export default class Ranger extends Archetype {
  energyType: EnergyType = 'stamina';
  static totalCreated = 0;

  constructor(name: string) {
    super(name);
    Ranger.totalCreated += 1;
  }

  static createdArchetypeInstances() {
    return Ranger.totalCreated;
  }

  get mageEnergyType(): EnergyType {
    return this.energyType;
  }
}