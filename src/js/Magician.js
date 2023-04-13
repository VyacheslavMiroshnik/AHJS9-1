import SpecialCharacters from './Special';

export default class Magician extends SpecialCharacters {
  constructor(name) {
    super(name, 'Magician');
    this.attack = 10;
    this.defence = 40;
  }
}
