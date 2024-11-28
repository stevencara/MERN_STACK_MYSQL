import { pool } from "../db.js";

/* -------------------------- VER TODAS LAS TAREAS -------------------------- */
export const getTasks = async (req, res) => {
  const [result] = await pool.query(
    "SELECT * FROM tasks ORDER BY createAt ASC"
  );
  res.json(result);
};

/* -------------------------- VISUALIZAR UNA TAREA -------------------------- */
export const getTask = async (req, res) => {
  const [result] = await pool.query("SELECT * FROM tasks WHERE id = ?", [
    req.params.id,
  ]);

  if (result.length === 0) {
    return res.status(404).json({ message: "Task not found" });
  }

  res.send(result[0]);
};

/* ----------------------------- CREAR UNA TAREA ---------------------------- */
export const createTask = async (req, res) => {
  const { title, description } = req.body;
  const [result] = await pool.query(
    "INSERT INTO tasks (title, description) VALUES (?, ?)",
    [title, description]
  );
  console.log(result);
  res.json({
    id: result.insertId,
    title,
    description,
  });
};

/* -------------------------- ACTUALIZAR UNA TAREA -------------------------- */
export const updateTask = async (req, res) => {
  const { title, description } = req.body;

  const result = await pool.query("UPDATE tasks SET ? WHERE id = ?", [
    req.body,
    req.params.id,
  ]);

  res.json(result);
};

/* ----------------------------- ELIMINAR TAREA ----------------------------- */
export const deleteTask = async (req, res) => {
  const [result] = await pool.query("DELETE FROM tasks WHERE id = ?", [
    req.params.id,
  ]);

  if (result.affectedRows === 0)
    return res.status(404).json({ message: "task not found" });
  return res.sendStatus(204);
};
