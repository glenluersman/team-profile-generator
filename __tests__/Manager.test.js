const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('Glen', 21, 'glen.luersman@gmail.com', 5);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets employee role', () => {
    const manager = new Manager('Glen', 21, 'glen.luersman@gmail.com', 5);

    expect(manager.getRole()).toEqual("Manager");
});