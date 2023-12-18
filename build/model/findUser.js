var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { db } from "../config.js";
export function findUser(field, value) {
    return __awaiter(this, void 0, void 0, function* () {
        //username
        const queryString = `SELECT * FROM User WHERE ${field}="${value}"`;
        let userReturned = null;
        try {
            const [result] = yield db.promise().query(queryString);
            if (result.length != 0) {
                userReturned = Object.assign({}, result[0]);
            }
        }
        catch (error) {
            console.error(error);
        }
        return userReturned;
    });
}
