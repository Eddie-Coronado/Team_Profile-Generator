const Employee = require('../lib/Employee');


    test('Should return the employee name', () => {
    const testName = 'Test Name';
    const emp = new Employee(testName);
    expect(emp.returnName()).toBe(testName);
 });

    test('Should return the employee id', () => {
    const testName = 'Test Name';
    const testId = 12;
    const emp = new Employee(testName, testId);
    expect(emp.returnId()).toBe(testId);
});

    test('Should return the employee email', () => {
    const testName = 'Test Name';
    const testId = '12';
    const testEmail = 'test@email.com';
    const emp = new Employee(testName, testId, testEmail);
    expect(emp.returnEmail()).toBe(testEmail);
});

    test('Should return Employee', () => {
    const testRole = 'Employee';
    const emp = new Employee(testRole);
    expect(emp.returnRole()).toBe(testRole);
    });

