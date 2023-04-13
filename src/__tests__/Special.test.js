import Magician from '../js/Magician';

test('Magician basic attack whithout stoned and distance 1', () => {
  const mag = new Magician('Ivan');
  expect(mag.attackCalc).toBe(10);
});
test('Magician basic attack whithout stoned and distance 2', () => {
  const mag = new Magician('Ivan');
  mag.attackCalc = 2;
  expect(mag.attackCalc).toBeCloseTo(9, 2);
});
test('Magician basic attack whith stoned and distance 3', () => {
  const mag = new Magician('Ivan');
  mag.attackCalc = 3;
  mag.stoned = true;
  const expected = 10 - Math.log2(3) * 5;

  expect(mag.attackCalc).toBeCloseTo(expected, 2);
});
test('Magician attack is imposible for big range', () => {
  const mag = new Magician('Ivan');
  mag.stoned = true;
  mag.attackCalc = 100;
  expect(mag.attackCalc).toBe(0);
});
test('Magician return stoned true ', () => {
  const mag = new Magician('ivan');
  mag.stoned = true;
  expect(mag.stoned).toBe(true);
});
test('Magician range is negative', () => {
  const mag = new Magician('ivan');
  mag.attackCalc = 0;
  expect(mag.attackCalc).toBe(10);
});
