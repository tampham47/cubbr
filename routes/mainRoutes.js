Router.route('/', function () {
  this.render('HomeTpt');
  SEO.set({ title: 'cubbr -' + Meteor.App.NAME });
});

Router.route('/activ', function () {
  this.render('ActivListTpt');
  SEO.set({ title: 'cubbr -' + Meteor.App.NAME });
});

Router.route('/activ/new', function () {
  this.render('ActivNewTpt');
  SEO.set({ title: 'cubbr -' + Meteor.App.NAME });
});

Router.route('/activ/detail', function () {
  this.render('ActivDetailTpt');
  SEO.set({ title: 'cubbr -' + Meteor.App.NAME });
});

Router.route('/login', function () {
  this.render('LoginTpt');
  SEO.set({ title: 'cubbr -' + Meteor.App.NAME });
});

Router.route('/update-profile', function () {
  this.render('UpdateProfileTpt');
  SEO.set({ title: 'cubbr -' + Meteor.App.NAME });
});
