
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
				<Header type="update-profile"/>
				<section className="page-content-container page-update-profile">
					<div className="form-wrap">
						<form action="" className="form">
							<input type="email" className="email" name="email" placeholder="Enter your email"/>
							<input type="tel" className="tel" name="tel" placeholder="Số điện thoại"/>
							<input type="text" className="email" name="work" placeholder="Công ty hay trường học"/>
							<textarea name="bio" className="bio" col="5" rows="6" placeholder="Bio"></textarea>
						</form>
					</div>
				</section>
			</div>
		);
	}
});
