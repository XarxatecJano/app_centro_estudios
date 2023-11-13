import { ResultSetHeader } from 'mysql2';
import { db } from '../config.js';
import { SchoolName } from '../types.js';

export async function saveSchool(school:SchoolName):Promise<number>{
    const queryString: string = `INSERT INTO School(name) VALUES ("${school.name}")`;
    let returnedId: number;
    try {
        const [result] = await db.promise().query<ResultSetHeader>(queryString);
        returnedId = result.insertId;
    } catch (error){
        console.error(error);
        returnedId = 0;
    }
    return returnedId;
}