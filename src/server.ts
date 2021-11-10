import express, { json } from "express";
import { db } from "./database/db";
import { router } from "./routes";

const app = express();

app.use(json());
app.use(router);

app.listen(8000, async () => {
    //await db.sync();
    console.log('App running on port 8000');
})