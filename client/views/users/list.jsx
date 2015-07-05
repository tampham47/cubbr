UsersListTpt = ReactMeteor.createClass({
  templateName: 'UsersListTpt',

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

  render: function() {
    var userItems = <p className="wrapper">No users</p>;
    var imageUrl = "images/thumbnail_48x48.png";
    if (this.state.userList.length) {
      userItems = this.state.userList.map(function(item, i) {
        for (var key in item.services) {
           if (item.services.hasOwnProperty(key)) {
               var obj = item.services[key];
                for (var prop in obj) {
                  if(obj.hasOwnProperty(prop)) {
                    if (prop === 'id') {
                      imageUrl = "http://avatars.io/facebook/" + obj[prop] + "?size=medium";
                      break;
                    }
                  }
               }
            }
        }
        return (
          <li className="table-view-cell media">
            <a className="navigate-right" href={"/users/detail/" + item._id} data-transition="slide-in">
              <img className="media-object pull-left" src={imageUrl} alt="Placeholder" />
              <div className="media-body">
                {item.fullName}
                <p>{item.occupation || item.email}</p>
              </div>
            </a>
          </li>
        );
      });
    }

    return (
      <div>
        <Header navActive="3" isHeader="true"
          plusHref="/activ/new" />

        <div className="container content">
          <h6 className="small-title">Users around 0.5km</h6>

          <ul className="table-view table-view-custom user-list">
            {userItems}
          </ul>
        </div>
      </div>
    );
  }
});
