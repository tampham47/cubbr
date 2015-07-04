// activities model

Activities = new Mongo.Collection('Activities');

Meteor.methods({
  'Activities.create': function (activityAttributes) {
    console.log('Activities.create');
    var activity = _.extend(activityAttributes, {
      userId: Meteor.user()._id,
      username: Meteor.user().username,
      postedDate: new Date(),
      topicName: activityAttributes.topicName,
      activityName: activityAttributes.activityName,
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
    return Activities.find({_id: activityId});
  }
});
