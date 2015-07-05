MessagesListTpt = ReactMeteor.createClass({
  templateName: 'MessagesListTpt',

  startMeteorSubscriptions: function() {
    Meteor.subscribe('Users.getByLocation');
  },

  getInitialState: function() {
    return {
      userList: []
    };
  },

  getMeteorState: function() {
    var userList = Meteor.users.find({}).fetch();
    return {
      userList: userList
    };
  },

  getAvatarPath: function(item) {
    for (var key in item.services) {
      if (item.services.hasOwnProperty(key)) {
          var obj = item.services[key];
          for (var prop in obj) {
            if(obj.hasOwnProperty(prop)) {
              if (prop === 'id') {
                imageUrl = "http://avatars.io/facebook/" + obj[prop] + "?size=medium";
                return imageUrl;
              }
            }
          }
      }
    }
  },

  render: function() {
    var userListRender = <p className="wrapper">No users</p>;

    if (this.state.userList.length) {
      userListRender = this.state.userList.map(function(item, i) {
        var avatarPath = this.getAvatarPath(item);
        return (
          <li className="table-view-cell media">
            <a className="navigate-right" href={"/messages/detail/" + item._id} data-transition="slide-in">
              <img className="media-object pull-left" src={avatarPath} alt="Placeholder" />
              <div className="media-body">
                {item.fullName}
                <p>{item.occupation || "---"}</p>
              </div>
            </a>
          </li>
        );
      }.bind(this));
    }

    return (
      <div>
        <Header navActive="4" isHeader="true"
          plusHref="/activ/new" />

        <div className="container content">
          <h6 className="small-title">Messages</h6>
          <ul className="table-view table-view-custom user-list">
            {userListRender}
          </ul>
        </div>
      </div>
    );
  }
});
