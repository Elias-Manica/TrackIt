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

function listHabit(token) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const promise = axios.get(`${Base_URL}/habits`, config);
  return promise;
}

function listHabitToday(token) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const promise = axios.get(`${Base_URL}/habits/today`, config);
  return promise;
}

function createHabit(name, days, token) {
  const body = {
    name: name,
    days: days,
  };

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const promise = axios.post(`${Base_URL}/habits`, body, config);
  return promise;
}

function checkHabit(idHabit, token) {
  const id = idHabit;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const promise = axios.post(`${Base_URL}/habits/${id}/check`, {}, config);
  return promise;
}

function uncheckHabit(idHabit, token) {
  const id = idHabit;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const promise = axios.post(`${Base_URL}/habits/${id}/uncheck`, {}, config);
  return promise;
}

function deleteHabit(idHabit, token) {
  const id = idHabit;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const promise = axios.delete(`${Base_URL}/habits/${id}`, config);
  return promise;
}

function getHistory(token) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const promise = axios.get(`${Base_URL}/habits/history/daily`, config);
  return promise;
}

export {
  login,
  singUp,
  listHabitToday,
  listHabit,
  createHabit,
  checkHabit,
  uncheckHabit,
  deleteHabit,
  getHistory,
};
