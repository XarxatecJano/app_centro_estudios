import Express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { router } from './routes/router.js';
import * as dotenv from 'dotenv';
import cors from 'cors';
import methodOverride from 'method-override';
import { engine } from 'express-handlebars';
import Session from 'express-session';
import { sessionStore } from './configSessionStore.js';
const app = Express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, '..', 'src/views'));
app.engine('handlebars', engine({ layoutsDir: path.join(__dirname, '..', 'src/views/layouts'), }));
app.use(Session({
    name: "sessionApiCE",
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
    secret: process.env.SESSION_SECRET,
    cookie: {
        maxAge: 24 * 60 * 60 * 1000,
        sameSite: true
    }
}));
app.use(Express.static(path.join(__dirname, "..", "public")));
app.use("/scripts", Express.static(path.join(__dirname, '..', 'build')));
app.use(cors());
dotenv.config({ path: path.join(__dirname, "..", ".env") });
app.use(Express.json());
app.use(Express.urlencoded({ extended: false }));
app.use(methodOverride((req, res) => {
    if (req.body && typeof req.body === 'object' && "_method" in req.body) {
        const method = req.body._method;
        delete req.body._method;
        return method;
    }
}));
app.use("/", router);
app.listen(process.env.PORT, () => {
    console.log(`App is listening at port ${process.env.PORT}`);
});
