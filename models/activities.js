// activities model

Activities = new Mongo.Collection('Activities');

Activities.helpers({
});

// Activities.before.insert(function (userId, doc) {
//   doc.createdAt = moment().toDate();
// });
