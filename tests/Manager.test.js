const Manager = require('../lib/Manager');


    test('Should return the Manager office number', () => {
    const testName = 'Test Name';
    const testId = '12';
    const testEmail = 'test@email.com';
    const testOfficeNumber = '1212';
    const mgr = new Manager(testName, testId, testEmail, testOfficeNumber);
    expect(mgr.returnOfficeNumber()).toBe(testOfficeNumber);
});

    test('Should return Manager', () => {
    const testRole = 'Manager';
    const mgr = new Manager(testRole);
    expect(mgr.returnRole()).toBe(testRole);
    });
