
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
			<div>
				<Header type="activities"/>
				<section className="page-content-container page-login">
					<Tabs active="activities" />
					<List />
				</section>
			</div>
		);
	}
});
