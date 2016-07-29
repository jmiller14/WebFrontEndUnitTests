/**
 * Input clear button
 */
const ngculator = angular.module("ngculator");
ngculator.component("ncClear", {
    template: `<button class=utility ng-click=$ctrl.click()><span class=button-content>AC</span></button>`,
    controller: "NcClearController",
});

ngculator.controller("NcClearController", function (InputService) {
    this.click = () => InputService.clean();
});
