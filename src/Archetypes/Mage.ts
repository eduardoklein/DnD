import { EnergyType } from '../Energy';
import Archetype from './Archetypes';

export default class Mage extends Archetype {
  energyType: EnergyType = 'mana';
  static totalCreated = 0;

  constructor(name: string) {
    super(name);
    Mage.totalCreated += 1;
  }

  static createdArchetypeInstances() {
    return Mage.totalCreated;
  }

  get mageEnergyType(): EnergyType {
    return this.energyType;
  }
}