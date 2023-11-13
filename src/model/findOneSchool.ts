import { RowDataPacket } from "mysql2";
import { db } from "../config.js";
import { School } from "../types.js";

export async function findOneSchool(id:number):Promise<School| null>{
    const queryString: string = `SELECT * FROM School WHERE id=${id}`;
    let schoolReturned: School | null = null;
    try {
        const [result] = await db.promise().query<RowDataPacket[]>(queryString);
        if (result.length != 0) schoolReturned = {...result[0]} as School;

    } catch(error){
        console.error(error);
    };
    return schoolReturned;
}