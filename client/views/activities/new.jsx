
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

  showLog: function() {
    console.log('show log');
  },

  render: function() {
    return (
      <div>
        <Header/>
        <p>ActivNewTpt</p>
        <button onClick={this.showLog}>CLICK</button>
        <Footer/>
      </div>
    );
  }
});
