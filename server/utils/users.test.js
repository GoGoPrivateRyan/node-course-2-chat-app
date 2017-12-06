const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Ryan',
      room: 'developer'
    }, {
      id: '2',
      name: 'Willie',
      room: 'programer'
    }, {
      id: '3',
      name: 'Kenny',
      room: 'developer'
    }];
  });

  it('should add user user', () => {
    var users = new Users();
    var user = {
      id: 123,
      name: 'Ryan',
      room: 'roomA'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    var userId = '3';
    var user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('should not remove user', () => {
    var userId = '99';
    var user = users.removeUser(userId);

    expect(user).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('should find user', () => {
    var userId = '2';
    var user = users.getUser(userId);

    expect(user.id).toBe(userId);
  });

  it('should not find user', () => {
    var userId = '99';
    var user = users.getUser(userId);

    expect(user).toNotExist();
  });

  it('should return names for developer', () => {
    var userList = users.getUserList('developer');

    expect(userList).toEqual(['Ryan', 'Kenny']);
  });

  it('should return names for programer', () => {
    var userList = users.getUserList('programer');

    expect(userList).toEqual(['Willie']);
  });
});
