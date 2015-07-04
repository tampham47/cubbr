
UpdateProfileTpt = ReactMeteor.createClass({
	templateName: 'UpdateProfileTpt',

	startMeteorSubscriptions: function() {
	},

	// Make sure your component implements this method.
	getMeteorState: function() {
	},

	render: function() {
		return (
			<div>
				<Header title="Update Profile"/>

				<section className="container">
					<form class="input-group">
						<input type="text" placeholder="Full name"/>
						<input type="email" placeholder="Email"/>
						<input type="text" placeholder="Username"/>
					</form>
				</section>
			</div>
		);
	}
});
