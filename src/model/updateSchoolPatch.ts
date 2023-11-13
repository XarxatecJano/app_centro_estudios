import { SchoolPartial } from "../types";
import { db } from "../config.js";
import { ResultSetHeader } from "mysql2";

export async function updateSchoolPatch(schoolData:SchoolPartial): Promise<number>{
    const queryString: string = `UPDATE School SET name="${schoolData.name}", updated_at= NOW() WHERE id=${schoolData.id};`; 
    let updatedRows: number =0;
    try{
        const [result] = await db.promise().query<ResultSetHeader>(queryString);
        updatedRows = result.affectedRows;
    } catch(error){
        console.log(error);
    }
    return updatedRows;
}