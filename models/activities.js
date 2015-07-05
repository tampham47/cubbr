// activities model

Activities = new Mongo.Collection('Activities');

Meteor.methods({
  'Activities.create': function (activityAttributes) {
    check(activityAttributes, Object);

    var activity = _.extend(activityAttributes, {
      userId: Meteor.user()._id,
      username: Meteor.user().profile.name,
      fullName: Meteor.user().fullName,
      postedDate: new Date(),
      topicName: activityAttributes.topicName
    });

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
    check(activityId, String);
    return Activities.findOne({_id: activityId});
  }
});
