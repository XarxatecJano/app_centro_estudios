var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { saveUser } from '../model/saveUser.js';
import { findUser } from '../model/findUser.js';
import bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';
export function postUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let user = {
            username: req.body.username,
            password: req.body.password,
            name: req.body.name,
            first_surname: req.body.first_surname,
            second_surname: req.body.second_surname,
            phone: req.body.phone,
            mail: req.body.mail,
            role: req.body.role,
            status: req.body.status,
        };
        const saltRounds = 10;
        const hashedPassword = yield bcrypt.hash(user.password, saltRounds);
        user.password = hashedPassword;
        const result = yield saveUser(user);
        if (result != 0)
            res.status(200).json({ "message": `Insert completado con éxito con ID: ${result}` });
        else
            res.status(400).send("No se pudo hacer el insert");
    });
}
export function getUserWithUsername(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield findUser(req.params.username);
        if (user)
            res.status(200).json(user);
        else
            res.status(404).json({ "error": "no se encontró el usuario" });
    });
}
export function logUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield findUser(req.body.username);
        if (user) {
            const isMatch = yield bcrypt.compare(req.body.password, user.password);
            if (isMatch) {
                const token = jsonwebtoken.sign({ "user": user.username, "role": user.role, "id": user.id }, process.env.SESSION_SECRET);
                req.session.token = token;
                res.status(200).render('logged', { layout: false, user: user });
            }
            else {
                res.status(401).json({ "error": "el password es incorrecto" });
            }
        }
        else {
            res.status(404).json({ "error": "no se encontró ningún usuario" });
        }
    });
}
