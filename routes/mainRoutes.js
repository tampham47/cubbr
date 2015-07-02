//

// Router.onBeforeAction(function() {
//   if (!Meteor.userId()) {
//     this.render('ActivListTpt');
//   } else {
//     this.next();
//   }
// });

Router.route('/', {
  name: 'HomeTpt',
  action: function () {
    this.render('HomeTpt');
    SEO.set({ title: 'Home - ' + Meteor.App.NAME });
  }
});

Router.route('/activ', function () {
  this.render('ActivListTpt');
  SEO.set({ title: 'Home - ' + Meteor.App.NAME });
});

Router.route('/activ/new', function () {
  this.render('ActivNewTpt');
  SEO.set({ title: 'Home - ' + Meteor.App.NAME });
});

Router.route('/activ/detail', function () {
  this.render('ActivDetailTpt');
  SEO.set({ title: 'Home - ' + Meteor.App.NAME });
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
