const {subtract} = require('../src/subtract');

test('Resta de 20 - 5 debe ser 15', () => {
    expect(subtract(20, 5)).toBe(15);
});