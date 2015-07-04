
UpdateProfileTpt = ReactMeteor.createClass({
	templateName: 'UpdateProfileTpt',

	startMeteorSubscriptions: function() {
	},

	getInitialState: function() {
		Meteor.call('Users.current', function(err, user) {
			if (err) {
				return;
			}

			console.log('current', user);

			var model = {
				fullName: user.fullName || user.services.facebook.name,
				email: user.email || user.services.facebook.email,
				occupation: user.occupation,
				bio: user.bio
			};

			this.setState({model: model});
		}.bind(this));

    return {
    	model: {}
    };
  },

	// Make sure your component implements this method.
	getMeteorState: function() {
	},

	handleChange: function(e){
    var model = this.state.model;
    model[e.target.name] = e.target.value;
    this.setState({model: model});
  },

	getModel: function() {
		var model = {
			fullName: this.refs.fullName.getDOMNode().value,
			email: this.refs.email.getDOMNode().value,
			phoneNumber: this.refs.phoneNumber.getDOMNode().value,
			occupation: this.refs.occupation.getDOMNode().value,
			bio: this.refs.bio.getDOMNode().value
		};

		return model;
	},

	leftMethod: function() {
		Router.go('/activ');
	},
	rightMethod: function() {
		var model = this.getModel();

		if ((model.fullName.length === 0) || (model.email.length === 0)) {
			alert('Full name and email are required!');
			return;
		}

		Meteor.call('Users.update', model, function(err, data) {
			if (err) {
				alert('Server error, try again later!');
				return;
			}
			console.log('update', data);
			Router.go('/activ');
		});
	},

	render: function() {
		return (
			<div className="small-header">
				<Header title="Update Profile"
					isTopNav="false"
					class="center"
					left="" right=""
					leftMethod={this.leftMethod}
					rightMethod={this.rightMethod}/>

				<section className="container wrapper">
					<form class="input-group">
						<input type="text" ref="fullName" placeholder="*full name"
							value={this.state.model.fullName}
							onChange={this.handleChange}/>
						<input type="email" ref="email" placeholder="*email"
							value={this.state.model.email}
							onChange={this.handleChange}/>
						<input type="text" ref="phoneNumber" placeholder="phone number"
							value={this.state.model.phoneNumber}
							onChange={this.handleChange}/>
						<input type="text" ref="occupation" placeholder="occupation"
							value={this.state.model.occupation}
							onChange={this.handleChange}/>
						<textarea rows="4" ref="bio" placeholder="bio"
							value={this.state.model.bio}
							onChange={this.handleChange}></textarea>
					</form>
				</section>

			</div>
		);
	}
});
