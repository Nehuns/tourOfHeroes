const functions = require('./functions');

test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});



test('Adds 2 + 2 to equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

test('Should be null', () => {
    expect(functions.isNull()).toBe(undefined);
});

test('Should be falsy', () => {
    expect(functions.checkValue(2)).toBe(2);
});


test('Should return user', () => {
    expect(functions.createUser()).toEqual({ firstName: 'Neha', lastName: 'Sharma', age: 22 });
});


test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThan(1600);
});

test('There is no I in team', () => {
    expect('teaim').not.toMatch(/I/);
});

test('Admin should be in usernames', () => {
    usernames = ['John', 'Karen', 'admin'];
    expect(usernames).toContain('admin');
});

//working with Async data
// test('User fetched name should be Leanne Graham', () => {
//     expect.assertions(1);
//     return functions.fetchUser().then(data => {
//         expect(data.name).toEqual('Leanne Graha');
//     })
// });

//Async await
test('User fetched name should be Leanne Graham', async () => {
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.name).toEqual('Leanne Graham');
});