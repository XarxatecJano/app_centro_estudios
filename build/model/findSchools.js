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
export function findSchools() {
    return __awaiter(this, void 0, void 0, function* () {
        const queryString = `SELECT * FROM School`;
        let schoolsReturned = [];
        try {
            const [result] = yield db.promise().query(queryString);
            schoolsReturned = result.map(row => {
                return Object.assign({}, row);
            });
        }
        catch (error) {
            console.error(error);
        }
        ;
        return schoolsReturned;
    });
}
