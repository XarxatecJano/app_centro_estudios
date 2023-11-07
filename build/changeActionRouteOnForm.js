var _a;
import { addParameterToActionFormEndpoint } from "./utils/addParameterToActionFormEndpoint.js";
(_a = document.querySelector("#school_options")) === null || _a === void 0 ? void 0 : _a.addEventListener("change", event => {
    const select = event.target;
    console.log(select);
    if (select) {
        const parameter = select.options[select.selectedIndex].getAttribute("value");
        console.log(parameter);
        const p = select.parentNode;
        const form = p.parentNode;
        if (form) {
            const formId = form.getAttribute("id");
            const currentActionForm = form.getAttribute("action");
            const endpoint = currentActionForm + "/" + parameter;
            addParameterToActionFormEndpoint(formId, endpoint);
        }
    }
});
