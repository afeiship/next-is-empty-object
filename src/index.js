import nx from '@jswork/next';

const toString = Object.prototype.toString;
const NATURE_OBJECT = '[object Object]';

nx.isEmptyObject = function (inObj) {
  if (inObj == null) return false;
  if (toString.call(inObj) === NATURE_OBJECT) {
    return !Object.keys(inObj).length;
  }
  return false;
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = nx.isEmptyObject;
}

export default nx.isEmptyObject;
