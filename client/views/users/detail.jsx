UsersDetailTpt = ReactMeteor.createClass({
  templateName: 'UsersDetailTpt',

  startMeteorSubscriptions: function() {
  },

  getMeteorState: function() {
  },

  getInitialState: function() {
    var userId = Router.current().params.id;
    Meteor.call('Users.getById', userId, function(err, data) {
      this.setState({user: data});
    }.bind(this));

    return {
      user: {}
    };
  },

  render: function() {
    return (
      <div>
        <Header navActive="3" isHeader="true"
          plusHref="/activ/new" />

        <div className="container content">
          <h6 className="small-title">Users information</h6>
          <ul className="table-view table-view-custom user-info-list">
            <li className="table-view-cell media">
              <span className="media-object pull-left icon icon-person"></span>
              <div className="media-body">
                {this.state.user.fullName}
              </div>
            </li>
            <li className="table-view-cell media">
              <span className="media-object pull-left icon icon-compose"></span>
              <div className="media-body">
                {this.state.user.email}
              </div>
            </li>
            <li className="table-view-cell media">
              <span className="media-object pull-left icon icon-plus"></span>
              <div className="media-body">
                {this.state.user.phoneNumber}
              </div>
            </li>
            <li className="table-view-cell media">
              <h6 className="user-bio-title">bio</h6>
              <p className="user-bio-content">{this.state.user.bio}</p>
            </li>
          </ul>
          <div className="wrapper">
            <a href={"/messages/detail/" + this.state.user._id} className="btn btn-positive btn-block btn-outlined">Send a message</a>
          </div>
        </div>
      </div>
    );
  }
});
