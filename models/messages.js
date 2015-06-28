// Messages model

Messages = new Mongo.Collection('Messages');

Messages.helpers({
});

// Messages.before.insert(function (userId, doc) {
//   doc.createdAt = moment().toDate();
// });
