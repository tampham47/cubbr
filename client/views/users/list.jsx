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

    if (this.state.userList.length) {
      userItems = this.state.userList.map(function(item, i) {
        return (
          <li className="table-view-cell media">
            <a className="navigate-right" href={"/users/detail/" + item._id} data-transition="slide-in">
              <img className="media-object pull-left" src="images/thumbnail_48x48.png" alt="Placeholder" />
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
