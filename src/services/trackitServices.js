import axios from "axios";

const Base_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";

function login(body) {
  const promise = axios.post(`${Base_URL}/auth/login`, body);
  return promise;
}

function singUp(body) {
  const promise = axios.post(`${Base_URL}/auth/sign-up`, body);
  return promise;
}

export { login, singUp };
