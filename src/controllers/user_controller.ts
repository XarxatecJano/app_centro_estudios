import Express from 'express';
import { User, UserPartial } from '../types.js';
import { saveUser} from '../model/saveUser.js';
import { findUser } from '../model/findUser.js';
import bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';

export async function postUser(req:Express.Request, res: Express.Response){
    let user: UserPartial = {
        username: req.body.username, 
        password: req.body.password,
        name: req.body.name,
        first_surname: req.body.first_surname,
        second_surname: req.body.second_surname,
        phone: req.body.phone,
        mail: req.body.mail,
        role: req.body.role,
        status: req.body.status,};
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(user.password, saltRounds);
    user.password = hashedPassword;
    const result: number = await saveUser(user);
    if (result!=0) res.status(200).json({"message":`Insert completado con éxito con ID: ${result}`});
    else res.status(400).send("No se pudo hacer el insert"); 
}

export async function getUserWithUsername(req:Express.Request, res: Express.Response){
    const user:User|null = await findUser(req.params.username);
    if (user) res.status(200).json(user);
    else res.status(404).json({"error": "no se encontró el usuario"});
}

export async function logUser(req:Express.Request, res: Express.Response){
    
    const user: User | null = await findUser(req.body.username);
    if (user){
        const isMatch = await bcrypt.compare(req.body.password, user.password);
        if (isMatch){
            const token = jsonwebtoken.sign({ "user": user.username, "role":user.role, "id": user.id }, process.env.SESSION_SECRET as string);
            req.session.token = token;
            res.status(200).render('logged', {layout: false, user: user});
        } else {
            res.status(401).json({"error": "el password es incorrecto"});
        }
    } else {
        res.status(404).json({"error": "no se encontró ningún usuario"});
    }
}

export async function logOutUser(req: Express.Request, res: Express.Response){
  req.session.destroy((error)=>{
            if (error) {
                res.status(500).json({"error": "No se pudo destruir la sesión"});
            } else {
                res.status(200).clearCookie("sessionApiCE");
                res.redirect("/login.html");
            }
   });
}