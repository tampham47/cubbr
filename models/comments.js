// Comments model

Comments = new Mongo.Collection('Comments');

Meteor.methods({
  'Comments.create': function(model) {
    check(model, Object);

    var comment = _.extend(model, {
      userId: Meteor.user()._id,
      fullName: Meteor.user().fullName,
      postedDate: new Date()
    });

    var commentId = Comments.insert(comment);

    return commentId;
  },

  'Comments.remove': function() {
  },

  'Comments.update': function() {
  }
});
