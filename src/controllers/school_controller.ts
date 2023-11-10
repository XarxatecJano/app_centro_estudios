import Express from 'express';
import { saveSchool } from '../model/saveSchool.js';


export async function postSchool(req: Express.Request, res: Express.Response):Promise<any>{
    const result:any = await saveSchool({name: req.body.name});
    if (result) res.status(200).send("Insert completado con éxito")
    else res.status(400).send("No se pudo hacer el insert");

    
}
/*
export function getSchools(req: Express.Request, res: Express.Response){
    const queryString: string = "SELECT * from School";
    db.query(queryString, (error, result)=>{
        if(error){
            res.send("No se leer la tabla");
        }
        res.json(result);

    })
}

export function getSchoolWithId(req: Express.Request, res: Express.Response){

    const queryString: string = `SELECT * from School WHERE id = ${req.params.id} `;
    db.query(queryString, (error, result)=>{
        if(error){
            res.send("No se leer la tabla");
        }
        res.json(result);

    })

}*/