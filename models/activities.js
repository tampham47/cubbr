// activities model

Activities = new Mongo.Collection('Activities');

Meteor.methods({
  'Activities.create': function (activityAttributes) {
    check(activityAttributes, Object);

    var activity = {
      userId: Meteor.user()._id,
      username: Meteor.user().profile.name,
      postedDate: new Date(),
      topicName: activityAttributes.topicName
    };

    var activityId = Activities.insert(activity);

    return activityId;
  },

  'Activities.remove': function (activityAttributes) {
    console.log('Activities.remove');
  },

  'Activities.update': function () {
    console.log('Activities.update');
  },

  'Activities.getById': function (activityId) {
    return Activities.find({_id: activityId});
  }
});
