ActivListTpt = ReactMeteor.createClass({
	templateName: 'ActivListTpt',

	startMeteorSubscriptions: function() {
    Meteor.subscribe('Activities.getByLocation');
	},

  getInitialState: function() {
    return {
      activList: []
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
    if (this.state.activList.length) {
      listItem = this.state.activList.map(function (item, i) {
        return (
          <li className="table-view-cell media">
            <a className="navigate-right" href="/activ/detail" data-transition="slide-in">
              <img className="media-object pull-left" src="images/thumbnail_64x64.png" alt="Placeholder" />
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
