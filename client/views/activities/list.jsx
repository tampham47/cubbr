
ActivListTpt = ReactMeteor.createClass({
  templateName: 'ActivListTpt',

  startMeteorSubscriptions: function() {
  },

  // Make sure your component implements this method.
  getMeteorState: function() {
    // var location = LocationService.getCurrentPosition();
    // console.log('location', location);
    LocationService.getCurrentPosition(function(pos) {
      console.log('pos', pos);
    });
  },

  render: function() {
    return (
      <div>
        <Header/>
        <a href="/">Home</a>
        <p>ActivListTpt</p>
        <Footer/>
      </div>
    );
  }
});
