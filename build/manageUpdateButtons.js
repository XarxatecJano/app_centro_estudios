"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
document.querySelectorAll(".updateSchoolButton").forEach(button => {
    button.addEventListener("click", (event) => __awaiter(void 0, void 0, void 0, function* () {
        event.preventDefault();
        const target = event.target;
        const buttonId = `${target.id}`;
        const inputTargetSchool = document.querySelector(`#schoolName-${target.value}`);
        const newSchoolName = inputTargetSchool.value;
        const body = {
            "id": `${target.value}`,
            "name": `${newSchoolName}`
        };
        console.log(body);
        const resultPatch = yield fetch("http://localhost:3000/api/v1/schools", {
            method: "PATCH",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(body),
        });
        const resultPatchJson = yield resultPatch.json();
        window.alert(resultPatchJson.message);
        location.reload();
    }));
});
