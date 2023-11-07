import { addParameterToActionFormEndpoint } from "./utils/addParameterToActionFormEndpoint.js";
document.querySelector("#school_options")?.addEventListener("change", event=>{
    const select: HTMLSelectElement = event.target as HTMLSelectElement;
    console.log(select);
    if (select){
        const parameter: string = select.options[select.selectedIndex].getAttribute("value") as string;
        console.log(parameter);
        const p:HTMLElement= select.parentNode as HTMLElement;
        const form: HTMLElement = p.parentNode as HTMLElement;
        if (form){
            const formId:string = form.getAttribute("id") as string;
            const currentActionForm: string = form.getAttribute("action") as string;
            const endpoint:string = currentActionForm+"/"+parameter;
            addParameterToActionFormEndpoint(formId, endpoint);
        } 
    }
});