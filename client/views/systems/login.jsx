
LoginTpt = ReactMeteor.createClass({
	templateName: 'LoginTpt',

	startMeteorSubscriptions: function() {
	},

	// Make sure your component implements this method.
	getMeteorState: function() {
	},

	facebookLogin: function() {
		Meteor.loginWithFacebook({
      requestPermissions: ['email']
    }, function (error) {
    	// incase get an error
      if (error) {
        alert('Get an error, try again later!');
        return;
      }
      // incase all was success
      Router.go('/update-profile');
    });
	},

	render: function() {
		return (
			<div className="small-header">
				<Header title="Login" isTopNav="false" class="center" />
				<section className="container wrapper login-page">
					<div className="login-block">
						<h5 className="login-title">Login with</h5>
						<a className="btn btn-positive btn-block btn-outlined"
							onClick={this.facebookLogin}>Facebook</a>
					</div>
				</section>
			</div>
		);
	}
});
