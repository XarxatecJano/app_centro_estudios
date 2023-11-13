import { RowDataPacket } from "mysql2";
import { db } from "../config.js";
import { School } from "../types.js";

export async function findSchools():Promise<School[]>{
    const queryString: string = `SELECT * FROM School`;
    let schoolsReturned: School[] = [];
    try {
        const [result] = await db.promise().query<RowDataPacket[]>(queryString);
        schoolsReturned = result.map(row=>{
            return {...row} as School;
        });
    } catch(error){
        console.error(error);
    };
    return schoolsReturned;

}