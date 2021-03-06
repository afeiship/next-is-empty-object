(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.isEmptyObject', function () {
      expect(nx.isEmptyObject(function () {})).toBe(false);
      expect(nx.isEmptyObject(null)).toBe(false);
      expect(nx.isEmptyObject(undefined)).toBe(false);
      expect(nx.isEmptyObject(new Date())).toBe(false);
      expect(nx.isEmptyObject(true)).toBe(false);
      expect(nx.isEmptyObject(false)).toBe(false);
      expect(nx.isEmptyObject(0)).toBe(false);
      expect(nx.isEmptyObject('s')).toBe(false);
      expect(nx.isEmptyObject('')).toBe(false);
      expect(nx.isEmptyObject({})).toBe(true);
      expect(nx.isEmptyObject(Object.create(null))).toBe(true);
      expect(nx.isEmptyObject({ a: 1 })).toBe(false);
    });
  });
})();
