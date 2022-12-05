import axios from 'axios';

export const Api = axios.create({
  baseURL: 'http://localhost:8080',
});

export const Register = async (username, password) => Api.post('/cadastro', { username, password });

export const LoginApi = async (username, password)=> Api.post('/login', { username, password});

export const User = async ()=> Api.get('/usuario');

export const Transfer = async (userNameDebited, userNameCredited, money, password)=> Api.post('/transferencia', {userNameDebited, userNameCredited, money, password});