import * as constants from '../constants';
console.log('constants', constants);

export const login = ({ email, password }) => Promise.resolve({
  "message":"the request has succeeded",
  "data":{
      "id": "52edd9352db76aeff2b34ed",
      "firstName": "Jon",
      "lastName": "Doe",
      "avatar": "https://lab.lectrum.io/redux/api/image/pzo9llga3r/placeholder.jpg",
      "token": "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1OWVkZDljMGY3ZTNjY2I3YTI1YzE0ZTIiLCJncm91cElkIjoiaG92YjBtN3V6ayIsImlhdCI6MTUwODc2MDAwMCwiZXhwIjoxNTA5MTA1NjAwfQ._xC93CpSfylH_XaBmr_xMoikT2hFKDt52se8EfF2StZ0R6ZgOOfQ8HDmEz-fbS1fFgZsTZhbkqmxnc9wBXD7dQ"
  }
});

export const register = ({
  firstName,
  lastName,
  email,
  password,
  invite
}) => Promise.resolve({
  "message":"the request has succeeded",
  "data":{
      "id": "52edd9352db76aeff2b34ed",
      "firstName": "Jon",
      "lastName": "Doe",
      "groupId": "844t1zdqp0",
      "avatar": "https://lab.lectrum.io/redux/api/image/pzo9llga3r/placeholder.jpg",
      "created": 1508760000,
      "token": "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1OWVkZDljMGY3ZTNjY2I3YTI1YzE0ZTIiLCJncm91cElkIjoiaG92YjBtN3V6ayIsImlhdCI6MTUwODc2MDAwMCwiZXhwIjoxNTA5MTA1NjAwfQ._xC93CpSfylH_XaBmr_xMoikT2hFKDt52se8EfF2StZ0R6ZgOOfQ8HDmEz-fbS1fFgZsTZhbkqmxnc9wBXD7dQ",
      "email": "j.doe@example.com"
  }
});

export const getContacts = () => Promise.resolve({
  "message":"the request has succeeded",
  "data": [
      {
        "id": "5ac0a625a50029dd2bb4a767",
        "firstName": "Vincenzo",
        "lastName": "Smith",
        "avatar": "https://lab.lectrum.io/redux/api/image/2z4qdjsxlq/placeholder.jpg"
      },
      {
        "id": "5ac0a625a50029dd2bb4a768",
        "firstName": "Danika",
        "lastName": "Volkman",
        "avatar": "https://lab.lectrum.io/redux/api/image/2z4qdjsxlq/placeholder.jpg"
      }
  ]
});