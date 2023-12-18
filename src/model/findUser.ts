import { User } from "../types.js";
import { db } from "../config.js";
import { RowDataPacket } from "mysql2";
import bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';

export async function findUser(field:string, value:string):Promise<User|null>{
    //username
    const queryString = `SELECT * FROM User WHERE ${field}="${value}"`;
    let userReturned: User | null = null;
    try{
        const [result] = await db.promise().query<RowDataPacket[]>(queryString);
        if (result.length!=0) {
            userReturned = {...result[0]} as User;
        }
    }catch(error){
        console.error(error);
    }
    return  userReturned;
}
