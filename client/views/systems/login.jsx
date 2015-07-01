
LoginTpt = ReactMeteor.createClass({
	templateName: 'LoginTpt',

	startMeteorSubscriptions: function() {
	},

	// Make sure your component implements this method.
	getMeteorState: function() {
	},

	render: function() {
		return (
			<div className="page-wrapper">
				<Header/>
				<section className="content page-content-container page-login">
					<div className="login-wrap flex h-center v-center">
						<a href="/update-profile" className="login-fb-btn"><i className="fa fa-facebook-square ib vm"></i><span className="ib vm">Facebook</span></a>
					</div>
				</section>
				{/*<Footer/>*/}
			</div>
		);
	}
});
