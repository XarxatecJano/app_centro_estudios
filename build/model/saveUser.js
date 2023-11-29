var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { db } from '../config.js';
export function saveUser(user) {
    return __awaiter(this, void 0, void 0, function* () {
        const queryString = `INSERT INTO User(username, password, name, first_surname, second_surname, phone,mail, role, status) VALUES ("${user.username}", "${user.password}","${user.name}","${user.first_surname}","${user.second_surname}","${user.phone}","${user.mail}","${user.role}","${user.status}")`;
        let returnedId;
        try {
            //TO-DO: comprobación username no duplicado
            const [result] = yield db.promise().query(queryString);
            returnedId = result.insertId;
        }
        catch (error) {
            console.error(error);
            returnedId = 0;
        }
        return returnedId;
    });
}
