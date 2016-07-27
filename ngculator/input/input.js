const ngculator = angular.module("ngculator");
ngculator.component("ncInput", {
    template: `<input class=calc-display ng-model=$ctrl.calculatorInput.num>`,
    controller: "NcInputController",
});

ngculator.controller("NcInputController", function (InputService) {
    this.calculatorInput = InputService;
});
