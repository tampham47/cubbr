// Publication
// Only publish tasks that are public or belong to the current user

Meteor.publish('Users.current', function () {
  return Meteor.users.find(
    {_id: this.userId}
  );
});

Meteor.publish('Users.getByLocation', function() {
  return Meteor.users.find({});
});

Meteor.publish('Users.getAll', function() {
  return Meteor.users.find({});
});
