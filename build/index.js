import Express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { router } from './routes/router.js';
import * as dotenv from 'dotenv';
import cors from 'cors';
const app = Express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(Express.static(path.join(__dirname, "..", "public")));
app.use("/scripts", Express.static(path.join(__dirname, '..', 'build')));
app.use(cors());
dotenv.config({ path: path.join(__dirname, "..", ".env") });
app.use(Express.urlencoded({ extended: false }));
app.use("/", router);
app.listen(process.env.PORT, () => {
    console.log(`App is listening at port ${process.env.PORT}`);
    console.log(`Me llamo ${process.env.NAME}`);
});
