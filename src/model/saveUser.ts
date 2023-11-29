import { ResultSetHeader } from 'mysql2';
import { db } from '../config.js';
import { UserPartial } from '../types.js';

export async function saveUser(user: UserPartial):Promise<number>{
    const queryString: string = `INSERT INTO User(username, password, name, first_surname, second_surname, phone,mail, role, status) VALUES ("${user.username}", "${user.password}","${user.name}","${user.first_surname}","${user.second_surname}","${user.phone}","${user.mail}","${user.role}","${user.status}")`;
    let returnedId: number;
    try {
        //TO-DO: comprobación username no duplicado
        const [result] = await db.promise().query<ResultSetHeader>(queryString);
        returnedId = result.insertId;
    } catch (error){
        console.error(error);
        returnedId = 0;
    }
    return returnedId;
}
