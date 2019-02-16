(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var toString = Object.prototype.toString;
  var NATURE_OBJECT = '[object Object]';
  // object.keys() only return enumerable props

  nx.isEmptyObject = function(inObj) {
    if (!inObj) return false;
    if (toString.call(inObj) === NATURE_OBJECT) {
      return !Object.keys(inObj).length;
    }
    return false;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.isEmptyObject;
  }
})();
