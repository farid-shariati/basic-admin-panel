import axios from 'libs/axios';

import history from 'helpers/history';

const register = async ({ email, password }) => {
  const user = { email, password };
  const { data } = await axios.post(`/register`, user);
  return data;
};

const login = async ({ email, password }) => {
  const user = { email, password };
  const { data } = await axios.post(`/login`, user);
  return data;
};

const getUsers = async (_, page) => {
  const { data } = await axios.get(`/users?page=${page}`);
  return data;
};

const getSingleUser = async (_, id) => {
  const { data } = await axios.get(`/users/${id}`);
  return data;
};

const getResources = async (_, page) => {
  const { data } = await axios.get(`/resources?page=${page}`);
  return data;
};

const getSingleResource = async (_, id) => {
  const { data } = await axios.get(`/resources/${id}`);
  return data;
};

const createUser = async ({ email, first_name, last_name, avatar, company, url, text }) => {
  const user = { email, first_name, last_name, avatar, company, url, text };
  const { data } = await axios.post(`/users`, user);
  return data;
};

const editUser = async ({ id, email, first_name, last_name, avatar, company, url, text }) => {
  const user = { email, first_name, last_name, avatar, company, url, text };
  const { data } = await axios.put(`/users/${id}`, user);
  return data;
};

const deleteUser = async (id) => {
  const { data } = await axios.delete(`/users/${id}`);
  return data;
};

const logout = () => {
  localStorage.removeItem('token');
  history.push('/');
};

export { register, login, logout, getUsers, getSingleUser, getResources, getSingleResource, createUser, editUser, deleteUser };
