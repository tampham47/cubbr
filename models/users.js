// functions for current users collection of meteor

Meteor.methods({
  'Users.updateLocation': function(userId, locationModel) {
  },

  'Users.getCurrent': function() {
    return Meteor.user();
  },

  'Users.getById': function(userId) {
    check(userId, String);
    return Meteor.users.findOne({_id: userId});
  },

  'Users.getByTopicId': function(topicId) {
    check(topicId, String);
    return Meteor.users.findOne({_id: topicId});
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
