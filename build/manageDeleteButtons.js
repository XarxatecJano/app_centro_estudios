document.querySelectorAll(".deleteSchool").forEach((school)=>{
    school.addEventListener("click", async (event)=>{
        event.preventDefault();
        const url = `${process.env.DOMAIN}/api/v1/schools/${event.target.value}`;
        const result = await fetch(url, {method: "DELETE"});
        const resultJson = await result.json();
        window.alert(resultJson.message);
        location.replace(`${process.env.DOMAIN}/api/v1/schools`);
    })
})
;