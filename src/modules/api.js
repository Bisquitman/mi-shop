export const API_URL = 'http://localhost:3001';

export const getData = (path) => {
  return fetch(API_URL + path).then((response) => {
    if (!response.ok) {
      throw new Error();
    }
    return response.json();
  });
};

export const postData = (path, data) => {
  return fetch(API_URL + path, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => {
    if (!response.ok) {
      throw new Error();
    }
    return response.json();
  });
};

export const putData = (path, data) => {
  return fetch(API_URL + path, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => {
    if (!response.ok) {
      throw new Error();
    }
    return response.json();
  });
};

export const patchData = (path, data) => {
  return fetch(API_URL + path, {
    method: 'PATCH',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => {
    if (!response.ok) {
      throw new Error();
    }
    return response.json();
  });
};

export const deleteData = (path) => {
  return fetch(API_URL + path, {
    method: 'DELETE',
  }).then((response) => {
    if (!response.ok) {
      throw new Error();
    }
    return response.json();
  });
};
