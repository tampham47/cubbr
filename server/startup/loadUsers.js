function loadUser(user) {
  var userAlreadyExists = typeof Meteor.users.findOne({ username : user.username }) === 'object';

  if (!userAlreadyExists) {
    Accounts.createUser(user);
  }
}

Meteor.startup(function () {
  // var users = YAML.eval(Assets.getText('users.yml'));

  // for (key in users) if (users.hasOwnProperty(key)) {
  //   loadUser(users[key]);
  // }

  ServiceConfiguration.configurations.upsert(
    {service: 'facebook'},
    {
      $set: {
        appId: '963469677032309',
        secret: '383a234f829b4101089053591e42c74a'
    }
  });
});
