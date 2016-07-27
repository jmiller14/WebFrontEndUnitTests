/**
 * Calc (=) utility
 *
 * Execute last stored operation
 */
const ngculator = angular.module("ngculator");
ngculator.component("ncCalc", {
    template: `<button ng-click=$ctrl.click()>=</button>`,
    controller: "NcCalcController",
});

ngculator.controller("NcCalcController", function (InputService) {
    this.click = () => InputService.executeOperation();
});
