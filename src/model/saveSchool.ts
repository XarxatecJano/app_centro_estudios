import { db } from '../config.js';

export function saveSchool(data:any):boolean{
    const queryString: string = `INSERT INTO School(name) VALUES ("${data.name}")`;
    db.query(queryString, (error, result)=>{
        if(error){
            return false;
        }
       return true;
    });
    return true;
}