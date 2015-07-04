// Publication
// Only publish tasks that are public or belong to the current user

Meteor.publish('Activities.getAll', function() {
  return Activities.find({});
});

Meteor.publish('Activities.getByLocation', function() {
  return Activities.find({});
});

Meteor.publish('Activities.getByTopic', function(topicId) {
  check(topicId, String);
  return Activities.find({topicId: topicId});
});
