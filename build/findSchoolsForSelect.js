export async function buildOptionsForSelect(){
    const schools = await fetch("http://127.0.0.1:3000/schools", {method: "GET", headers: {'Content-Type': 'application/json'} });
    const schoolsJson = await schools.json();
    let options = "";
    if (schoolsJson){
        for (let school of schoolsJson){
            options+=`<option value="${school.id}">${school.name}</option>`
        }
    }
    document.querySelector("#school_options").innerHTML=options;
}
window.addEventListener('load', buildOptionsForSelect);


