//const session = require('express-session'); //CAMBIAR A IMPORT
import Session from 'express-session';
import MySQLSessionStore from 'express-mysql-session';
const optionsStore = {
    connectionLimit: 30,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    createDatabaseTable: true,
    schema: {
        tableName: 'sessiontbl',
        columnNames: {
            session_id: 'session_id',
            expires: 'expires',
            data: 'data',
        }
    }
};
const sqlStore = new MySQLSessionStore(Session);
const sessionStore = new sqlStore(optionsStore);
export { sessionStore };
