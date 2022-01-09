const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Glen', 21, 'glen.luersman@gmail.com', 'glenluersman');

    expect(engineer.github).toEqual(expect.any(String));
});

test('gets engineer github value', () => {
    const engineer = new Engineer('Glen', 21, 'glen.luersman@gmail.com', 'glenluersman');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('gets role of employee', () => {
    const engineer = new Engineer('Glen', 21, 'glen.luersman@gmail.com', 'glenluersman');

    expect(engineer.getRole()).toEqual("Engineer");
});