// Topics model

Topics = new Mongo.Collection('Topics');

Meteor.methods({
  'Topics.create': function(topicAttributes) {
    console.log('Topics.create');
    var topic = _.extend(topicAttributes, {
      userId: Meteor.user()._id,
      username: Meteor.user().profile.name,
      postedDate: new Date(),
      topicName: topicAttributes.title,
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
