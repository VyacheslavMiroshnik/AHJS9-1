export default class Character {
  constructor(name = '', type = '') {
    if (name.length >= 2 && name.length <= 10) {
      if (
        [
          'Bowerman',
          'Swordsman',
          'Magician',
          'Daemon',
          'Undead',
          'Zombie',
        ].includes(type)
      ) {
        this.name = name;
        this.level = 1;
        this.health = 100;
        this.type = type;
      } else {
        throw new Error('неправильны тип');
      }
    } else {
      throw new Error('неправильное имя');
    }
  }
}
