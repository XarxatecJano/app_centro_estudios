import Express from 'express';
import { db } from '../config.js';

export function saveSchool(req: Express.Request, res: Express.Response):void{
    const queryString: string = `INSERT INTO School(name) VALUES ("${req.body.name}")`;
    db.query(queryString, (error, result)=>{
        if(error){
            res.send("No se pudo hacer el insert");
        }
        res.send("El insert se hizo con éxito");  
    });
}

export function findSchools(req: Express.Request, res: Express.Response){
    const queryString: string = "SELECT * from School";
    db.query(queryString, (error, result)=>{
        if(error){
            res.send("No se leer la tabla");
        }
        res.json(result);

    })
}

export function findSchoolWithId(req: Express.Request, res: Express.Response){

    const queryString: string = `SELECT * from School WHERE id = ${req.params.id} `;
    db.query(queryString, (error, result)=>{
        if(error){
            res.send("No se leer la tabla");
        }
        res.json(result);

    })

}