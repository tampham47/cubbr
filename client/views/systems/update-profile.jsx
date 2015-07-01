
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
				<section className="content page-content-container page-update-profile">
					<div className="form-wrap">
						{/*<form action="" className="form">
							<input type="email" className="email" name="email" placeholder="Enter your email"/>
							<input type="tel" className="tel" name="tel" placeholder="Số điện thoại"/>
							<input type="text" className="email" name="work" placeholder="Công ty hay trường học"/>
							<textarea name="bio" className="bio" col="5" rows="6" placeholder="Bio"></textarea>
						</form>*/}
						<form class="input-group">
							<input type="text" placeholder="Full name" />
							<input type="email" placeholder="Enter your email" />
							<input type="text" placeholder="Số điện thoại" />
							<input type="text" placeholder="Công ty hay trường học" />
							<textarea rows="5"></textarea>
						</form>
					</div>
				</section>
			</div>
		);
	}
});
