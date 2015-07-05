// Messages model

Messages = new Mongo.Collection('Messages');

Meteor.methods({
  'Messages.create': function(model) {
    check(model, Object);
    var toUser = Meteor.users.findOne({_id: model.to});
    var fromUser = Meteor.user();

    var message = _.extend(model, {
      fromUserId: fromUser._id,
      fromUser: fromUser,
      toUserId: model.to,
      toUser: toUser,
      postedDate: new Date()
    });

    var messageId = Messages.insert(message);

    return messageId;
  },

  'Messages.remove': function() {
    console.log('Messages.remove');
  },

  'Messages.update': function() {
    console.log('Messages.update');
  },

  'Messages.getById': function (messageId) {
    return Messages.find({_id: messageId});
  }
});
