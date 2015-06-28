// history service

HistoryService = (function() {
  var history = [];

  var push = function(page) {
    history.push(page);
  };

  var pop = function() {
    var result = history.pop();
    return result;
  }



})();
