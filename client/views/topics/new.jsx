
TopicNewTpt = ReactMeteor.createClass({
  templateName: 'TopicNewTpt',

  startMeteorSubscriptions: function() {
  },

  // Make sure your component implements this method.
  getMeteorState: function() {
  },

  getInitialState: function() {
    LocationService.getCurrentPosition(function(pos) {
      this.setState({position: pos});
    }.bind(this));

    return {
      model: {},
      position: {}
    };
  },

  handleChange: function(e){
    var model = this.state.model;
    model[e.target.name] = e.target.value;
    this.setState({model: model});
  },

  getModel: function() {
    var model = {
      topicName: this.refs.topicName.getDOMNode().value,
      position: this.state.position
    };

    return model;
  },

  leftMethod: function() {
    Router.go('/topics');
  },
  rightMethod: function() {
    var model = this.getModel();
    console.log('this.getModel', model);
    Meteor.call('Topics.create', this.getModel(), function(err, result) {
      console.log('result', result);
      Router.go('/topics');
    });
  },

  render: function() {
    return (
      <div className="small-header">
        <Header title="New Topic"
          isTopNav="false"
          class="center"
          left="" right=""
          leftMethod={this.leftMethod}
          rightMethod={this.rightMethod}/>

        <section className="container">
          <div className="wrapper">
            <form class="input-group">
              <input type="text" ref="topicName" placeholder="topic name"
                value={this.state.model.topicName}
                onChange={this.handleChange}/>
            </form>
            <p className="note">* your topics just display within 500m radius of your location.</p>
          </div>
        </section>
      </div>
    );
  }
});
