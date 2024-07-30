import express from "express";
import { pool } from "./db.js";

const app = express();

app.get('/ping', async(req, res)=> {
    const [result] = await pool.query('select 1+1 as result');
    res.json(result)
})

app.listen(3000);