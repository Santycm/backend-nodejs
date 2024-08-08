import { pool } from "../db.js";

export const getEmployees = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM employee");
  res.json(rows);
};

export const getEmployee = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM employee WHERE id = ?", [
    req.params.id,
  ]);
  if (rows.length <= 0)
    return res.status(404).json({ message: "Employee not found" });
  res.send(rows[0]);
};

export const postEmployee = async (req, res) => {
  const { name, salary } = req.body;

  const [rows] = await pool.query(
    "INSERT INTO employee(name, salary) VALUES(?, ?)",
    [name, salary]
  );

  res.send({
    id: rows.insertId,
    name,
    salary,
  });
};

export const deleteEmployee = async (req, res) => {
  const [result] = await pool.query("DELETE FROM employee WHERE id = ?", [
    req.params.id,
  ]);

  if (result.affectedRows <= 0)
    return res.status(404).json({ message: "Employee not found" });

  res.status(200).json({ message: "Employee deleted" });
};

export const putEmployee = async (req, res)=>{
    const {id} = req.params;
    const {name, salary} = req.body;


};

export const patchEmployee = (req, res) => {
  res.send("actualizando empleados");
};
