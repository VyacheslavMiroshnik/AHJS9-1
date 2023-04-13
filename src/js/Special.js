import Character from './Character';

export default class SpecialCharacters extends Character {
  constructor(name, type) {
    super(name, type);
    this.isStoned = false;
    this.distance = 1;
  }

  get attackCalc() {
    let attackPower;
    if (this.isStoned) {
      attackPower = this.attack - Math.log2(this.distance) * 5;
    } else {
      attackPower = this.attack * (1 - (this.distance - 1) / 10);
    }
    this.distance = 1;
    this.isStoned = false;
    return attackPower <= 0 ? 0 : attackPower;
  }

  set attackCalc(distance) {
    this.distance = distance <= 0 ? 1 : distance;
  }

  get stoned() {
    return this.isStoned;
  }

  set stoned(value) {
    this.isStoned = value;
  }
}
