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
import { transporter } from '../configNodemailer.js';
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
        const user = yield findUser('username', req.params.username);
        if (user)
            res.status(200).json(user);
        else
            res.status(404).json({ "error": "no se encontró el usuario" });
    });
}
export function logUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield findUser('username', req.body.username);
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
export function logOutUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        req.session.destroy((error) => {
            if (error) {
                res.status(500).json({ "error": "No se pudo destruir la sesión" });
            }
            else {
                res.status(200).clearCookie("sessionApiCE");
                res.redirect("/login.html");
            }
        });
    });
}
export function userRecovery(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield findUser('mail', req.body.email);
        if (user) {
            console.log(user);
            const mail = {
                from: process.env.SMTP_USER,
                to: `${req.body.email}`,
                subject: "Recuperación de password Centro de estudios",
                //text: "Mail de prueba"
                html: `<html><body><p>Por favor, haga click en el siguiente <a href='http://localhost:3000/api/v1/users/recovery/${user.username}' target='blank'>enlace</a> para introducir un password nuevo</p></body></html>`
            };
            transporter.sendMail(mail, (err, info) => {
                if (err) {
                    res.status(500).json({ "error": "no se pudo mandar el email" });
                }
                else {
                    res.status(200).json(req.body);
                }
            });
        }
        else {
            res.status(404).json({ "error": "no se encontró ningún usuario con ese email registrado." });
        }
    });
}
export function setNewPassword(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        res.status(200).render("renew_password", { layout: false, username: req.params.username });
    });
}
