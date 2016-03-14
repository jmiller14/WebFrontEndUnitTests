describe('NgculatorCtrl', () => {
  let $controller;
  let controller;

  let calcInput, history;

  beforeEach(angular.mock.module('ngculator'));
  beforeEach(inject((_$controller_, _calcInput_, _history_) => {
    $controller = _$controller_;
    controller = $controller('NgculatorCtrl');
    calcInput = _calcInput_;
    history = _history_;
  }));

  describe('clear', () => {
    it('clears result', () => {
      spyOn(history, 'clear');
      spyOn(calcInput, 'clear');
      controller.clear();

      expect(history.clear).toHaveBeenCalled();
      expect(calcInput.clear).toHaveBeenCalled();
    });
  });
});
