describe('NgculatorCtrl', () => {
  let $controller;

  beforeEach(angular.mock.module('ngculator'));
  beforeEach(inject(_$controller_ => {
    $controller = _$controller_;
  }));

  function createCtrl() {
    return $controller('NgculatorCtrl');
  }

  describe('calculations', () => {
    it('adds two numbers', () => {
      const controller = createCtrl();

      controller.add(1, 2);

      expect(controller.result).toEqual(3);
    });
  });

  describe('clear', () => {
    it('clears result', () => {
      const controller = createCtrl();

      controller.add(1, 2);
      controller.clear();

      expect(controller.result).toEqual('');
    });
  });
});
