const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('Glen', 21, 'glen.luersman@gmail.com', 'OSU');

    expect(intern.school).toEqual(expect.any(String));
});

test('gets employee school', () => {
    const intern = new Intern('Glen', 21, 'glen.luersman@gmail.com', 'OSU');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('gets employee role', () => {
    const intern = new Intern('Glen', 21, 'glen.luersman@gmail.com', 'OSU');

    expect(intern.getRole()).toEqual("Intern");
});