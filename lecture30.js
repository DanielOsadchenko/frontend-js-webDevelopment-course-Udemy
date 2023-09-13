"use strict";

const baseUrl = "https://jsonplaceholder.typicode.com";

const fetchAllUsers = () => {
  fetch(baseUrl + "/users")
    .then((responce) => {
      if (!responce.ok) {
        throw new Error("Something is wrong...");
      }
      return responce.json();
    })
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};
fetchAllUsers();

//Task 2

const fetchAlbumsByUserId = (id) => {
  fetch(`${baseUrl}/users/${id}/albums`)
    .then((responce) => {
      if (!responce.ok) {
        throw new Error("Something is wrong...");
      }
      return responce.json();
    })
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};
fetchAlbumsByUserId(10);

//Task 3

const createNewUser = (user) => {
  fetch(`${baseUrl}/users`, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((responce) => {
      if (!responce.ok) {
        throw new Error("Something is wrong...");
      }
      return responce.json();
    })
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};
createNewUser({
  name: "Name LastName",
  username: "UserName",
  email: "usermail@gmail.com",
});

// Task 4

const getSpecifiedAlbums = (arrayOfId) => {
  const getAlbum = (id) => {
    return fetch(`${baseUrl}/albums/${id}`).then((responce) => responce.json());
  };
  const arrayOfPromises = [];
  arrayOfId.forEach((id) => arrayOfPromises.push(getAlbum(id)));

  Promise.all(arrayOfPromises)
    .then((responce) => console.log(responce))
    .catch((err) => console.log(err));
};
getSpecifiedAlbums([1, 2, 3]);
