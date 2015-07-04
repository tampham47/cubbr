// Topics model

Topics = new Mongo.Collection('Topics');

Meteor.methods({
  'Topics.create': function(topicAttributes) {
    check(topicAttributes, Object);

    var topic = _.extend(topicAttributes, {
      userId: Meteor.user()._id,
      postedDate: new Date()
    });

    var topicId = Topics.insert(topic);
    return topicId;
  },

  'Topics.remove': function() {
    console.log('Topics.remove');
  },

  'Topics.update': function() {
    console.log('Topics.update');
  },

  'Topics.getById': function (topicId) {
    return Topics.find({_id: topicId});
  }
});
