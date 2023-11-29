import { User } from "../types.js";
import { db } from "../config.js";
import { RowDataPacket } from "mysql2";
import bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';

export async function findUser(username:string):Promise<User|null>{
    const queryString = `SELECT * FROM User WHERE username="${username}"`;
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
