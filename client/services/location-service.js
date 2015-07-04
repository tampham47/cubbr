
LocationService = {
  getCurrentPosition: function(cback) {
    // get location
    navigator.geolocation.getCurrentPosition(function(pos) {
      var position = {
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
        timestamp: pos.timestamp
      };
      console.log('location', position, pos);
      cback && cback(position);
    });
  }
};
