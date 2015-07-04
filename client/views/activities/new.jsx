
ActivNewTpt = ReactMeteor.createClass({
	templateName: 'ActivNewTpt',

  startMeteorSubscriptions: function() {
  	Meteor.subscribe('Activities.getAll');
  },

  // Make sure your component implements this method.
  getMeteorState: function() {
  	var activs = Activities.find({}).fetch();
  	console.log('activs', activs);
  },

  getInitialState: function() {
    return {
      model: {}
    };
  },

  handleChange: function(e){
    var model = this.state.model;
    model[e.target.name] = e.target.value;
    this.setState({model: model});
  },

  getModel: function() {
    var model = {
      content: this.refs.content.getDOMNode().value
    };

    return model;
  },

	leftMethod: function() {
    Router.go('/activ');
  },
  rightMethod: function() {
    Meteor.call('', this.getModel(), function(err, result) {
      Router.go('/activ');
    });
  },

	render: function() {
		return (
			<div className="small-header">
        <Header title="New Activities"
          isTopNav="false"
          class="center"
          left="" right=""
          leftMethod={this.leftMethod}
          rightMethod={this.rightMethod}/>

				<section className="container">
					<div className="wrapper">
            <form class="input-group">
              <textarea rows="5" ref="content" placeholder="what do you want to share?"
                value={this.state.model.content}
                onChange={this.handleChange}></textarea>
            </form>
						<p className="note">* your activities just display within 1km radius of your location.</p>
					</div>
				</section>
			</div>
		);
	}
});
