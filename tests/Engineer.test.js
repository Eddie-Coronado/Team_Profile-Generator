const Engineer = require('../lib/Engineer');


    test('Should return the Engineer GitHub', () => {
    const testName = 'Test Name';
    const testId = '12';
    const testEmail = 'test@email.com';
    const testGitHub = 'test-github';
    const emp = new Engineer(testName, testId, testEmail, testGitHub);
    expect(emp.returnGitHub()).toBe(testGitHub);
});

    test('Should return Engineer', () => {
    const testRole = 'Engineer';
    const emp = new Engineer(testRole);
    expect(emp.returnRole()).toBe(testRole);
    });
