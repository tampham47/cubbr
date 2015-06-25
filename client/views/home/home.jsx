
Home = ReactMeteor.createClass({
  templateName: 'Home',

  startMeteorSubscriptions: function() {
  },

  // Make sure your component implements this method.
  getMeteorState: function() {
  },

  render: function() {
    return (
      <div>
        <Header/>
          <p>Site map!</p>
          <p>
            <a href="/activ">activ</a><br/>
            <a href="/activ/new">activ new</a><br/>
            <a href="/activ/detail">activ detail</a>
          </p>
        <Footer/>
      </div>
    );
  }
});
