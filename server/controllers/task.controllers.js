import { pool } from "../db.js";

/* -------------------------- VER TODAS LAS TAREAS -------------------------- */
export const getTasks = async (req, res) => {
  try {
    throw new Error("Error de conexion");
    const [result] = await pool.query(
      "SELECT * FROM tasks ORDER BY createAt ASC"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/* -------------------------- VISUALIZAR UNA TAREA -------------------------- */
export const getTask = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM tasks WHERE id = ?", [
      req.params.id,
    ]);

    if (result.length === 0) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.send(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/* ----------------------------- CREAR UNA TAREA ---------------------------- */
export const createTask = async (req, res) => {
  try {
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
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/* -------------------------- ACTUALIZAR UNA TAREA -------------------------- */
export const updateTask = async (req, res) => {
  try {
    const { title, description } = req.body;

    const result = await pool.query("UPDATE tasks SET ? WHERE id = ?", [
      req.body,
      req.params.id,
    ]);

    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/* ----------------------------- ELIMINAR TAREA ----------------------------- */
export const deleteTask = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM tasks WHERE id = ?", [
      req.params.id,
    ]);

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "task not found" });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
