// functions for current users collection of meteor

Meteor.methods({
  'Users.updateLocation': function(userId, locationModel) {
  },

  'Users.getCurrent': function() {
    return Meteor.user();
  },

  'Users.update': function(data) {
    check(data, Object);

    var user = Meteor.user();
    Meteor.users.update(
      {_id: user._id},
      {
        $set: data
      }
    );

    return Meteor.user();
  },

  'Users.current': function() {
    return Meteor.user();
  }
});
