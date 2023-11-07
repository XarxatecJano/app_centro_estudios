import { db } from '../config.js';
export function saveSchool(req, res) {
    const queryString = `INSERT INTO School(name) VALUES ("${req.body.name}")`;
    db.query(queryString, (error, result) => {
        if (error) {
            res.send("No se pudo hacer el insert");
        }
        res.send("El insert se hizo con éxito");
    });
}
export function findSchools(req, res) {
    const queryString = "SELECT * from School";
    db.query(queryString, (error, result) => {
        if (error) {
            res.send("No se leer la tabla");
        }
        res.json(result);
    });
}
export function findSchoolWithId(req, res) {
    const queryString = `SELECT * from School WHERE id = ${req.params.id} `;
    db.query(queryString, (error, result) => {
        if (error) {
            res.send("No se leer la tabla");
        }
        res.json(result);
    });
}
export function deleteSchoolWithId(req, res) {
    const queryString = `DELETE FROM School WHERE id = ${req.params.id} `;
    db.query(queryString, (error, result) => {
        if (error) {
            res.send("No se pudo borrar el registro");
        }
        res.json(result);
    });
}
