/**
 * Input clear button
 */
const ngculator = angular.module("ngculator");
ngculator.component("ncClear", {
    template: `<button ng-click=$ctrl.click()>AC</button>`,
    controller: "NcClearController",
});

ngculator.controller("NcClearController", function (InputService) {
    this.click = () => InputService.clear();
});
