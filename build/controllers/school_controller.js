var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { saveSchool } from '../model/saveSchool.js';
import { findSchools } from '../model/findSchools.js';
import { findOneSchool } from '../model/findOneSchool.js';
import { deleteOneSchool } from '../model/deleteOneSchool.js';
import { updateSchoolPut } from '../model/updateSchoolPut.js';
import { updateSchoolPatch } from '../model/updateSchoolPatch.js';
export function postSchool(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const school = { name: req.body.name };
        const result = yield saveSchool(school);
        if (result != 0)
            res.status(200).json({ "message": `Insert completado con éxito con ID: ${result}` });
        else
            res.status(400).send("No se pudo hacer el insert");
    });
}
;
export function getSchools(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const schoolsReturned = yield findSchools();
        if (schoolsReturned)
            res.status(200).render('main', { layout: 'layout1', schools: schoolsReturned });
        else
            res.status(400).json({ "error": "no se pudo realizar la consulta" });
    });
}
export function getSchoolWithId(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const schoolReturned = yield findOneSchool(parseInt(req.params.id));
        if (schoolReturned)
            res.status(200).json(schoolReturned);
        else
            res.status(404).json({ "error": "no se encontró el dato" });
    });
}
export function deleteSchoolWithId(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const deleteResponse = yield deleteOneSchool(parseInt(req.params.id));
        if (deleteResponse == 1)
            res.status(200).json({ "message": `El registro ${req.params.id} se eliminó con éxito` });
        else
            res.status(400).json({ "error": "no se pudo borrar el registro" });
    });
}
export function updateSchoolFull(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const schoolData = Object.assign({}, req.body);
        const updateResponse = yield updateSchoolPut(schoolData);
        if (updateResponse == 1)
            res.status(200).json({ "message": `El registro ${schoolData.id} se actualizó con éxito` });
        else
            res.status(400).json({ "error": "no se pudo actualizar el registro" });
    });
}
export function updateSchoolPartial(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const schoolData = { id: req.body.id, name: req.body.name };
        const updateResponse = yield updateSchoolPatch(schoolData);
        if (updateResponse == 1)
            res.status(200).json({ "message": `El registro ${schoolData.id} se actualizó con éxito` });
        else
            res.status(400).json({ "error": "no se pudo actualizar el registro" });
    });
}
/*
    const updateFields = req.body;
    const queryParts = ``;
    for (const [key, value] of Object.entries(updateFields)) {
        queryParts += `${key} = ${value}`;
    }
*/ 
