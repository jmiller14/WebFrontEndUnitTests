/**
 * Input clear button
 */
const ngculator = angular.module("ngculator");
ngculator.component("ncDecimal", {
    template: `<button ng-click=$ctrl.click()>.</button>`,
    controller: "NcDecimalController",
});

ngculator.controller("NcDecimalController", function (InputService) {
    this.click = () => InputService.addDecimal();
});
