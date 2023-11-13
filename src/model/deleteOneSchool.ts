import { ResultSetHeader } from "mysql2";
import { db } from "../config.js";


export async function deleteOneSchool(id:number): Promise<number> {
    const queryString = `DELETE FROM School WHERE id = ${id}`;
    let rowsDeleted: number = 0;
    try{
        const [result] = await db.promise().query<ResultSetHeader>(queryString);
        rowsDeleted = result.affectedRows;
    } catch (error) {
        console.error(error);
    }
    return rowsDeleted;
}