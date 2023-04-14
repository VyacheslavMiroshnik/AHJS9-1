import Character from './Character';

export default class SpecialCharacters extends Character {
  constructor(name, type) {
    super(name, type);
    this.isStoned = false;
    this.attackPower = 0;
    this.distance = 1;
  }

  get attackCalc() {
    const actualAttack = this.isStoned
      ? this.attackPower - Math.log2(this.distance) * 5
      : this.attackPower * (1 - (this.distance - 1) / 10);
    this.distance = 1;
    this.isStoned = false;
    this.attackPower = 0;
    return actualAttack <= 0 ? 0 : actualAttack;
  }

  set attackCalc(attack) {
    if (typeof attack !== 'number') {
      throw new Error('arguments is not a Number');
    } else {
      this.attackPower = attack;
    }
  }

  get stoned() {
    return this.isStoned;
  }

  set stoned(value) {
    if (typeof value !== 'boolean') {
      throw new Error('arguments must be boolean');
    } else {
      this.isStoned = value;
    }
  }

  get distance() {
    return this.actualDistance <= 1 ? 1 : this.actualDistance;
  }

  set distance(range) {
    if (typeof range !== 'number') {
      throw new Error('arguments is not a Number');
    } else {
      this.actualDistance = range;
    }
  }
}
