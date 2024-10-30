const {add} = require('../src/add');

test('Suma de 2 + 3 debe ser 5', () => {
    expect(add(2, 3)).toBe(5);
});

test('Suma de -1 + 1 debe ser 0', () => {
    expect(add(-1, 1)).toBe(0);
});
