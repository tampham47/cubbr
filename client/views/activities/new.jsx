
ActivNewTpt = ReactMeteor.createClass({
  templateName: 'ActivNewTpt',

  startMeteorSubscriptions: function() {
  },

  // Make sure your component implements this method.
  getMeteorState: function() {
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
