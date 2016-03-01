describe('NgculatorCtrl', () => {
  let $controller;
  let $rootScope;

  beforeEach(inject((_$controller_, _$rootScope_) => {
    $rootScope = _$rootScope_;
    $controller = _$controller_;
  }));

  function createCtrl() {
    return $controller('NgculatorCtrl', {
      $scope: $rootScope.$new(),
    });
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
