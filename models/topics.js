// Topics model

Topics = new Mongo.Collection('Topics');

Topics.helpers({
});

// Topics.before.insert(function (userId, doc) {
//   doc.createdAt = moment().toDate();
// });
