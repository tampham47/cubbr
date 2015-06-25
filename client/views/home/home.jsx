
HomeTpt = ReactMeteor.createClass({
  templateName: 'HomeTpt',

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
            <a href="/activ/detail">activ detail</a><br/>
            <br/>

            <a href="/login">login</a><br/>
            <a href="/update-profile">update profile</a>
          </p>
        <Footer/>
      </div>
    );
  }
});
