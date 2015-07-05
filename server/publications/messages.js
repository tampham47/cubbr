// Publication
// Only publish tasks that are public or belong to the current user

Meteor.publish('Messages.getAll', function() {
  return Messages.find({});
});

Meteor.publish('Messages.getByConversation', function(toUserId) {
  check(toUserId, String);
  var fromUserId = Meteor.userId;

  // return Messages.find({$or: [
  //   {fromUserId: fromUserId, toUserId: toUserId},
  //   {toUserId: fromUserId, fromUserId: toUserId}
  // ]});
  return Messages.find({});
});

Meteor.publish('Messages.getByUser', function() {
  return Messages.find({});
});
