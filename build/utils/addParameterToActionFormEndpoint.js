export function addParameterToActionFormEndpoint(formId, routeWithParameter) {
    var _a;
    (_a = document.querySelector(`#${formId}`)) === null || _a === void 0 ? void 0 : _a.setAttribute("action", routeWithParameter);
}
