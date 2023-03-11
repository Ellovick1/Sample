import axios from 'axios';

// get token from localStorage
const data = localStorage.getItem('user');
console.log(`the data from local storage ${data}`);
const json = data == null ? data : JSON.parse(data);
const token = json?.data?.data?.auth?.token;
console.log(`token is  ${token}`);

const instance = axios.create({
  baseURL: 'https://api-6456a8c4-main.usemend.com/v1',
  headers: { Authorization: 'Bearer ' + token },
});

instance.get('/path').then((response) => {
  return response.data;
});

axios.defaults.headers.common = { Authorization: `bearer ${token}` };
instance.defaults.headers.common['Authorization'] = 'Auth from instance';

export default instance;
