
ActivListTpt = ReactMeteor.createClass({
	templateName: 'ActivListTpt',

	startMeteorSubscriptions: function() {
	},

  // Make sure your component implements this method.
  getMeteorState: function() {
    // var location = LocationService.getCurrentPosition();
    // console.log('location', location);
    LocationService.getCurrentPosition(function(pos) {
      console.log('pos', pos);
    });
  },

  render: function() {
		return (
			<div className="has-tabs">
				<Header type="activities"/>
				<Tabs active="activities" />
				<section className="content page-content-container">
					<List />
				</section>
			</div>
		);
	}
});
