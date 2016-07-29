/**
 * Subtract operator
 *
 * Store previous input value to operate on and set next operation to subtract
 */
const ngculator = angular.module("ngculator");
ngculator.component("ncSubtract", {
    template: `<button class=operator ng-click=$ctrl.click()><span class=button-content>&ndash;</span></button>`,
    controller: "NcSubtractController",
});

ngculator.controller("NcSubtractController", function (InputService) {
    this.click = () => InputService.setOperation((left, right) => left - right);
});

