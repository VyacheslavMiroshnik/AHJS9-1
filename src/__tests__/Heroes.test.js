import Daemon from '../js/Daemon';
import Magician from '../js/Magician';
import Character from '../js/Character';

const listHeroes = [
  [
    'Magician',
    new Magician('ivan'),
    {
      name: 'ivan',
      type: 'Magician',
      health: 100,
      attack: 10,
      defence: 40,
      level: 1,
      distance: 1,
      isStoned: false,
    },
  ],
  [
    'Daemon',
    new Daemon('ivan'),
    {
      name: 'ivan',
      type: 'Daemon',
      health: 100,
      attack: 10,
      defence: 40,
      level: 1,
      distance: 1,
      isStoned: false,
    },
  ],
];
test.each(listHeroes)('test %s', (_, classObj, result) => {
  const person = classObj;
  expect(person).toEqual(result);
});
test('Test Character invalid name value', () => {
  expect(() => new Character('n')).toThrow();
});
test('Test Character invalid type', () => {
  expect(() => new Character('Gin', 'Superman')).toThrow();
});
test('empty Character ', () => {
  expect(() => new Character()).toThrow();
});
