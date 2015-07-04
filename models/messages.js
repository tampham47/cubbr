// Messages model

Messages = new Mongo.Collection('Messages');

Meteor.methods({
  'Messages.create': function() {
    console.log('Messages.create');
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
