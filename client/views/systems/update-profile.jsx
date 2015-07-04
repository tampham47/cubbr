
UpdateProfileTpt = ReactMeteor.createClass({
	templateName: 'UpdateProfileTpt',

	startMeteorSubscriptions: function() {
	},

	// Make sure your component implements this method.
	getMeteorState: function() {
	},

	leftMethod: function() {

	},

	rightMethod: function() {
		window.location = '/activ';
	},

	render: function() {
		return (
			<div>
				<Header title="Update Profile" leftIcon='' rightIcon=''
					leftMethod={this.leftMethod}
					rightMethod={this.rightMethod}/>

				<section className="container">
					<form class="input-group">
						<input type="text" placeholder="full name"/>
						<input type="email" placeholder="email"/>
						<input type="text" placeholder="occupation"/>
						<textarea rows="4" placeholder="bio"></textarea>
					</form>
				</section>

			</div>
		);
	}
});
