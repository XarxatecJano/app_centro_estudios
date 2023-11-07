export function addParameterToActionFormEndpoint(formId: string, routeWithParameter: string){
    document.querySelector(`#${formId}`)?.setAttribute("action", routeWithParameter);
}