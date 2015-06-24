Router.route('/', function () {
  this.render('home');
  SEO.set({ title: 'Home -' + Meteor.App.NAME });
});

Router.route('/activ', function () {
  this.render('activList');
  SEO.set({ title: 'Home -' + Meteor.App.NAME });
});

Router.route('/activ/new', function () {
  this.render('activNew');
  SEO.set({ title: 'Home -' + Meteor.App.NAME });
});

Router.route('/activ/detail', function () {
  this.render('activDetail');
  SEO.set({ title: 'Home -' + Meteor.App.NAME });
});
