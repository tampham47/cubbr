// Define App Constants

if (Meteor.App) {
  throw new Meteor.Error('Meteor.App already defined? see client/lib/constants.js');
}

Meteor.App = {
  NAME: 'Cubbr',
  DESCRIPTION: 'Ứng dụng nhắn tin dựa trên vị trí!'
};
