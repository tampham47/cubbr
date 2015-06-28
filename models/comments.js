// Comments model

Comments = new Mongo.Collection('Comments');

Comments.helpers({
});

// Comments.before.insert(function (userId, doc) {
//   doc.createdAt = moment().toDate();
// });
