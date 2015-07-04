// functions for current users collection of meteor

Meteor.methods({
  'Users.updateLocation': function(userId, locationModel) {
  },
  'Users.getCurrent': function() {
    console.log('Users.getCurrent', Meteor.user());
  }
});
