Router.route('/', function () {
  this.render('Home');
  SEO.set({ title: 'Home -' + Meteor.App.NAME });
});

Router.route('/activ', function () {
  this.render('ActivList');
  SEO.set({ title: 'Home -' + Meteor.App.NAME });
});

Router.route('/activ/new', function () {
  this.render('ActivNew');
  SEO.set({ title: 'Home -' + Meteor.App.NAME });
});

Router.route('/activ/detail', function () {
  this.render('ActivDetail');
  SEO.set({ title: 'Home -' + Meteor.App.NAME });
});
