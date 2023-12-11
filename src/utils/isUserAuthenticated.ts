import Express, {NextFunction} from 'express';
import jsonwebtoken from 'jsonwebtoken';

export async function isUserAuthenticated(req: Express.Request, res:Express.Response, next: NextFunction){
    if(req.session.token != undefined){
        const tokenVerified = await jsonwebtoken.verify(req.session.token, process.env.SESSION_SECRET!);
        if (tokenVerified){
            next();
        }
    }
    else {
        res.status(401).json({"message": "No estás ayutorizad@"});
    }
}