const Intern = require('../lib/Intern');


    test('Should return the Intern school', () => {
    const testName = 'Test Name';
    const testId = '12';
    const testEmail = 'test@email.com';
    const testSchool = 'UCLA';
    const int = new Intern(testName, testId, testEmail, testSchool);
    expect(int.returnSchool()).toBe(testSchool);
});

    test('Should return Intern', () => {
    const testRole = 'Intern';
    const int = new Intern(testRole);
    expect(int.returnRole()).toBe(testRole);
    });
