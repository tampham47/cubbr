
LoginTpt = ReactMeteor.createClass({
	templateName: 'LoginTpt',

	startMeteorSubscriptions: function() {
	},

	// Make sure your component implements this method.
	getMeteorState: function() {
	},

	render: function() {
		return (
			<div>
				<Header title="Login"/>
				<section className="container login-page">
					<div className="login-block">
						<h5 className="login-title">Login with</h5>
						<a href="/update-profile" className="btn btn-positive btn-block btn-outlined">Facebook</a>
					</div>
				</section>
			</div>
		);
	}
});
