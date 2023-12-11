import Express, {NextFunction} from 'express';
import jsonwebtoken from 'jsonwebtoken';
import { jwUserToken } from '../types';

export async function  userIsAdmin(req: Express.Request, res: Express.Response, next: NextFunction){
    let isAuthorized = false
    if (req.session.token != undefined){
        const tokenVerified = await jsonwebtoken.verify(req.session.token, process.env.SESSION_SECRET!);
        console.log(tokenVerified);
        const myUserTokenVerified:jwUserToken =  <jwUserToken>tokenVerified;
        if (myUserTokenVerified.role == "Admin"){
           isAuthorized = true;
        }
    } 
    isAuthorized?next():res.status(401).json({"message": "No estás ayutorizad@"});
}