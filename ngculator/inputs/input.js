const ngculator = angular.module("ngculator");
ngculator.component("ncInput", {
    template: `<input ng-model=$ctrl.calculatorInput>`,
    controller: "NcInputController",
});

ngculator.controller("NcInputController", function (InputService) {
    this.calculatorInput = InputService.input;
    this.lastOperand = null;
});
