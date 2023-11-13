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
export function updateSchoolPatch(schoolData) {
    return __awaiter(this, void 0, void 0, function* () {
        const queryString = `UPDATE School SET name="${schoolData.name}", updated_at= NOW() WHERE id=${schoolData.id};`;
        let updatedRows = 0;
        try {
            const [result] = yield db.promise().query(queryString);
            updatedRows = result.affectedRows;
        }
        catch (error) {
            console.log(error);
        }
        return updatedRows;
    });
}
