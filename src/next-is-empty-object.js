(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var toString = Object.prototype.toString;
  var NATURE_OBJECT = '[object Object]';

  nx.isEmptyObject = function(inObj) {
    if (inObj == null) return false;
    if (toString.call(inObj) === NATURE_OBJECT) {
      return !Object.keys(inObj).length;
    }
    return false;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.isEmptyObject;
  }
})();
