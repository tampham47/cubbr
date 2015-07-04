//

Router.onBeforeAction(function() {
  if (!Meteor.userId()) {
    this.render('LoginTpt');
  } else {
    this.next();
  }
});

Router.route('/', {
  name: 'HomeTpt',
  action: function () {
    // this.render('HomeTpt');
    this.render('ActivListTpt');
    SEO.set({ title: 'Home - ' + Meteor.App.NAME });
  }
});

Router.route('/activ', function () {
  this.render('ActivListTpt');
  SEO.set({ title: 'Activities List - ' + Meteor.App.NAME });
});

Router.route('/activ/new', function () {
  this.render('ActivNewTpt');
  SEO.set({ title: 'Activity New - ' + Meteor.App.NAME });
});

Router.route('/activ/detail/:id', function () {
  this.render('ActivDetailTpt');
  SEO.set({ title: 'Activity Detail - ' + Meteor.App.NAME });
});

Router.route('/login', function () {
  this.render('LoginTpt');
  SEO.set({ title: 'Home - ' + Meteor.App.NAME });
});

Router.route('/update-profile', function () {
  this.render('UpdateProfileTpt');
  SEO.set({ title: 'Home - ' + Meteor.App.NAME });
});

Router.route('/posts', function () {
  this.render('PostsTpt');
  SEO.set({ title: 'Home - ' + Meteor.App.NAME });
});

Router.route('/users', function () {
  this.render('UsersListTpt');
  SEO.set({ title: 'Users List - ' + Meteor.App.NAME });
});

Router.route('/users/detail', function () {
  this.render('UsersDetailTpt');
  SEO.set({ title: 'Users Detail - ' + Meteor.App.NAME });
});

Router.route('/topics', function () {
  this.render('TopicsListTpt');
  SEO.set({ title: 'Topics List - ' + Meteor.App.NAME });
});

Router.route('/topics/new', function () {
  this.render('TopicNewTpt');
  SEO.set({ title: 'Topics List - ' + Meteor.App.NAME });
});

Router.route('/topics/detail/:id', function () {
  console.log('this.params', this.params);
  this.render('TopicsDetailTpt');
  SEO.set({ title: 'Topics Detail - ' + Meteor.App.NAME });
});

Router.route('/messages', function () {
  this.render('MessagesListTpt');
  SEO.set({ title: 'Messages List - ' + Meteor.App.NAME });
});

Router.route('/messages/detail', function () {
  this.render('MessagesDetailTpt');
  SEO.set({ title: 'Messages Detail - ' + Meteor.App.NAME });
});

Router.route('/histories', function () {
  this.render('MessagesListTpt');
  SEO.set({ title: 'Messages List - ' + Meteor.App.NAME });
});
