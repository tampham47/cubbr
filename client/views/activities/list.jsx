ActivListTpt = ReactMeteor.createClass({
	templateName: 'ActivListTpt',

	startMeteorSubscriptions: function() {
    Meteor.subscribe('Activities.getByLocation');
	},

  getInitialState: function() {
    Meteor.call('Users.getCurrent', function (err, result) {
      this.setState({currentUser: result});
    }.bind(this));
    return {
      activList: [],
      currentUser: {}
    };
  },

  // Make sure your component implements this method.
  getMeteorState: function() {
    var activList = Activities.find({}).fetch();
    return {
      activList: activList
    };
  },

  render: function() {
    var listItem = '';
    var imageUrl = "../images/thumbnail_64x64.png";
    var services = this.state.currentUser.services;
    // console.log('OKIE', services['facebook']);
    if (this.state.currentUser) {
      // imageUrl = "http://avatars.io/facebook/" + this.state.currentUser.services.facebook.id + "?size=medium";
    }


    if (this.state.activList.length) {
      listItem = this.state.activList.map(function (item, i) {
        console.log(item);
        return (
          <li className="table-view-cell media">
            <a className="navigate-right" href={"/activ/detail/" + item._id} data-transition="slide-in">
              <img className="media-object pull-left" src={imageUrl} alt="Placeholder" />
              <div className="media-body">
                {item.username}
                <p>{item.content}</p>
              </div>
            </a>
          </li>
        );
      });
    }

		return (
			<div>
        <Header navActive="1" isHeader="true"
          plusHref="/activ/new" />
        <div className="container content">
          <h6 className="small-title">Activities arround 1.5km</h6>
          <ul className="table-view">
            {listItem}
          </ul>
        </div>
      </div>
		);
	}
});
