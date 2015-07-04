
LocationService = {
  getCurrentPosition: function(cback) {
    // get location
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos;
        pos = position.coords;
        pos.timestamp = position.timestamp;

      console.log('location', pos);
      cback && cback(pos);
    });
  }
};
