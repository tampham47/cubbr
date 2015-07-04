ActivNewTpt = ReactMeteor.createClass({
	templateName: 'ActivNewTpt',

  startMeteorSubscriptions: function() {
  	Meteor.subscribe('Activities.getAll');
  },

  // Make sure your component implements this method.
  getMeteorState: function() {
  	var activs = Activities.find({}).fetch();
  },

  getInitialState: function() {
    var currentTopic = Session.get('currentTopic') || {};
    return {
      model: {},
      topicId: currentTopic._id,
      topicName: currentTopic.topicName,
      topic: currentTopic
    };
  },

  handleChange: function(e){
    var model = this.state.model;
    model[e.target.name] = e.target.value;
    this.setState({model: model});
    console.log(model);
  },

  getModel: function() {
    var model = {
      content: this.refs.content.getDOMNode().value,
      topicName: this.refs.topicName.getDOMNode().value,
      topicId: this.state.topicId
    };
    return model;
  },

	leftMethod: function() {
    Router.go('/activ');
  },
  rightMethod: function() {
    Meteor.call('Activities.create', this.getModel(), function (err, result) {
      if (this.state.topicId != undefined) {
        Router.go('/topics/detail/' + this.state.topicId);
      } else {
        Router.go('/activ');
      }
    }.bind(this));
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
              <textarea rows="5" ref="content" placeholder="What do you want to share?"
                value={this.state.model.content}
                onBlur={this.handleChange}></textarea>
              <input type="text" ref="topicName" placeholder="Category Name"
                className={this.state.topicName!=null?"":"hidden"}
                value={this.state.topicName} />
            </form>
						<p className="note">* Your activities just display within 1km radius of your location.</p>
					</div>
				</section>
			</div>
		);
	}
});
