/**
 * Directive to widen the corresponding button
 */
const ngculator = angular.module("ngculator");
ngculator.directive("ncWideButton", () => (scope, element) => {
    element.find("button").addClass("wide");
});
