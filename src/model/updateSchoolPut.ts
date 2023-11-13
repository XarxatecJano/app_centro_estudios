import { School } from "../types";
import { db } from "../config.js";
import { ResultSetHeader } from "mysql2";

export async function  updateSchoolPut(schoolUpdated: School):Promise<number>{
    const queryString: string = `UPDATE School SET name="${schoolUpdated.name}", created_at="${schoolUpdated.createdAt}", updated_at= NOW() WHERE id=${schoolUpdated.id};`; 
    let updatedRows: number =0;
    try{
        const [result] = await db.promise().query<ResultSetHeader>(queryString);
        updatedRows = result.affectedRows;
    } catch(error){
        console.log(error);
    }
    return updatedRows;
}