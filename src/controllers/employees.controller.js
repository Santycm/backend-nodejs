import { pool } from "../db.js";

export const getEmployees = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM employee");

    if (rows.length <= 0)
      return res.status(404).json({ message: "Employees not found" });

    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error}" });
  }
};

export const getEmployee = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM employee WHERE id = ?", [
      req.params.id,
    ]);
    if (rows.length <= 0)
      return res.status(404).json({ message: "Employee not found" });
    res.send(rows[0]);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }

  
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

export const putEmployee = async (req, res) => {
  const { id } = req.params;
  const { name, salary } = req.body;

  const [result] = await pool.query(
    "UPDATE employee SET name = ?, salary = ? WHERE id = ?",
    [name, salary, id]
  );

  if (result.affectedRows <= 0)
    return res.status(404).json({ message: "Employee not found" });

  const [rows] = await pool.query("SELECT * FROM employee WHERE id = ?", [id]);

  res.status(200).json({ message: "Employee updated", employee: rows[0] });
};

export const patchEmployee = async (req, res) => {
  const { id } = req.params;
  const { name, salary } = req.body;

  const [result] = await pool.query(
    "UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?",
    [name, salary, id]
  );

  if (result.affectedRows <= 0)
    return res.status(404).json({ message: "Employee not found" });

  const [rows] = await pool.query("SELECT * FROM employee WHERE id = ?", [id]);

  res.status(200).json({ message: "Employee updated", employee: rows[0] });
};
