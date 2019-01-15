(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  nx.isEmptyObject = function(inObj) {
    var key;
    for (key in inObj) return false;
    return true;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.isEmptyObject;
  }
})();
