import { pool } from "../db.js";

export const getPing = async (req, res) => {
  const [result] = await pool.query("select 1+9 as result");
  res.json(result);
};

export const testCase = (req, res)=>{
  res.json({"message":"probanding"})
}
