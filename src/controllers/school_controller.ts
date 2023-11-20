import Express from 'express';
import { saveSchool } from '../model/saveSchool.js';
import { findSchools } from '../model/findSchools.js';
import { School, SchoolName, SchoolPartial } from '../types.js';
import { findOneSchool } from '../model/findOneSchool.js';
import { deleteOneSchool } from '../model/deleteOneSchool.js';
import { updateSchoolPut } from '../model/updateSchoolPut.js';
import { updateSchoolPatch } from '../model/updateSchoolPatch.js';


export async function postSchool(req: Express.Request, res: Express.Response){
    const school:SchoolName = {name: req.body.name};
    const result:number = await saveSchool(school);
    if (result!=0) res.status(200).json({"message":`Insert completado con éxito con ID: ${result}`});
    else res.status(400).send("No se pudo hacer el insert"); 
};

export async function getSchools(req: Express.Request, res: Express.Response){
    const schoolsReturned:School[] = await findSchools();
    if(schoolsReturned) res.status(200).render('main', {layout: 'layout1', schools: schoolsReturned });
    else res.status(400).json({"error": "no se pudo realizar la consulta"});

}

export async function getSchoolWithId(req: Express.Request, res: Express.Response){
   const schoolReturned: School|null = await findOneSchool(parseInt(req.params.id));
   if (schoolReturned) res.status(200).json(schoolReturned);
   else res.status(404).json({"error": "no se encontró el dato"});
}

export async function deleteSchoolWithId(req: Express.Request, res: Express.Response){
    const deleteResponse: number = await deleteOneSchool(parseInt(req.params.id));
    if (deleteResponse==1) res.status(200).json({"message": `El registro ${req.params.id} se eliminó con éxito`});
    else res.status(400).json({"error": "no se pudo borrar el registro"});
}

export async function updateSchoolFull(req: Express.Request, res: Express.Response){
    const schoolData: School = {...req.body} as School;
    const updateResponse: number = await updateSchoolPut(schoolData);
    if (updateResponse==1) res.status(200).json({"message": `El registro ${schoolData.id} se actualizó con éxito`});
    else res.status(400).json({"error": "no se pudo actualizar el registro"});
}

export async function updateSchoolPartial(req: Express.Request, res: Express.Response){
    const schoolData: SchoolPartial = {id: req.body.id, name: req.body.name};
    const updateResponse: number = await updateSchoolPatch(schoolData);
    if (updateResponse==1) res.status(200).json({"message": `El registro ${schoolData.id} se actualizó con éxito`});
    else res.status(400).json({"error": "no se pudo actualizar el registro"});
}
/*
    const updateFields = req.body; 
    const queryParts = ``;
    for (const [key, value] of Object.entries(updateFields)) {
        queryParts += `${key} = ${value}`;
    }
*/