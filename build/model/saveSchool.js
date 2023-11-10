import { db } from '../config.js';
export function saveSchool(data) {
    const queryString = `INSERT INTO School(name) VALUES ("${data.name}")`;
    db.query(queryString, (error, result) => {
        if (error) {
            return false;
        }
        return true;
    });
    return true;
}
