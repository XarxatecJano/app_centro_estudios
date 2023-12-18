import { UserPasswordPartial } from "../types";
import { db } from "../config.js";
import { ResultSetHeader } from "mysql2";

export async function updateUserPasswordWithPatch(userData:UserPasswordPartial): Promise<number>{
    const queryString: string = `UPDATE User SET password="${userData.password}", updated_at= NOW() WHERE username="${userData.username}";`; 
    console.log(queryString);
    let updatedRows: number =0;
    try{
        const [result] = await db.promise().query<ResultSetHeader>(queryString);
        updatedRows = result.affectedRows;
    } catch(error){
        console.log(error);
    }
    return updatedRows;
}