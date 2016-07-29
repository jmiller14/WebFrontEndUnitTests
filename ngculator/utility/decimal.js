/**
 * Input clear button
 */
const ngculator = angular.module("ngculator");
ngculator.component("ncDecimal", {
    template: `<button ng-click=$ctrl.click()><span class=button-content>.</span></button>`,
    controller: "NcDecimalController",
});

ngculator.controller("NcDecimalController", function (InputService) {
    this.click = () => InputService.addDecimal();
});
