import axios from "axios";

const API_URL =
  "https://66db35a4f47a05d55be764ce.mockapi.io/users/azmii/todo-app";

export const fetchTodos = async () => {
  const response = await axios.get(API_URL, { params: { _limit: 10 } });
  return response.data;
};

export const addTodoApi = async (todo) => {
  const response = await axios.post(API_URL, todo);
  return response.data;
};

export const deleteTodoApi = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
