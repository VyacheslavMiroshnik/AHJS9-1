import SpecialCharacters from './Special';

export default class Daemon extends SpecialCharacters {
  constructor(name) {
    super(name, 'Daemon');
    this.attack = 10;
    this.defence = 40;
  }
}
