import axios from "axios";

const URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:4000";

export const getTasksRequest = async () => await axios.get(`${URL}/tasks`);

export const createTaskRequest = async (task) =>
  await axios.post(`${URL}/tasks`, task);

export const deleteTaskRequest = async (id) =>
  await axios.delete(`${URL}/tasks/${id}`);

export const getTaskRequest = async (id) =>
  await axios.get(`${URL}/tasks/${id}`);

export const updateTaskRequest = async (id, newFields) =>
  await axios.put(`${URL}/tasks/${id}`, newFields);

export const toggleTaskDoneRequest = async (id, done) =>
  await axios.put(`${URL}/tasks/${id}`, {
    done,
  });
