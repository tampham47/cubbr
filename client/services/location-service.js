
LocationService = {
  getCurrentPosition: function(cback) {
    // get location
    navigator.geolocation.getCurrentPosition(function(position) {
      cback(position);
    });
  }
};
