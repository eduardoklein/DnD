import { EnergyType } from '../Energy';
import Archetype from './Archetypes';

export default class Necromancer extends Archetype {
  energyType: EnergyType = 'mana';
  static totalCreated = 0;

  constructor(name: string) {
    super(name);
    Necromancer.totalCreated += 1;
  }

  static createdArchetypeInstances() {
    return Necromancer.totalCreated;
  }

  get mageEnergyType(): EnergyType {
    return this.energyType;
  }
}