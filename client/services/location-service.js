
LocationService = {
  getCurrentPosition: function(cback) {
    // get location
    navigator.geolocation.getCurrentPosition(function(pos) {
      var position = {
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
        timestamp: pos.timestamp
      };
      cback && cback(position);
    });
  }
};
