// Publication
// Only publish tasks that are public or belong to the current user

Meteor.publish('Messages.getAll', function() {
  return Messages.find({});
});

Meteor.publish('Messages.getByConversation', function() {
  return Messages.find({});
});

Meteor.publish('Messages.getByUser', function() {
  return Messages.find({});
});
