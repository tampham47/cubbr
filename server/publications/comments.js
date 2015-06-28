// Publication
// Only publish tasks that are public or belong to the current user

Meteor.publish('Comments.getAll', function() {
  return Comments.find({});
});

Meteor.publish('Comments.getByActivity', function() {
  return Comments.find({});
});
