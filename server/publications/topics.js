// Publication
// Only publish tasks that are public or belong to the current user

Meteor.publish('Topics.getAll', function() {
  return Topics.find({});
});

Meteor.publish('Topics.getByLocation', function() {
  return Topics.find({});
});
