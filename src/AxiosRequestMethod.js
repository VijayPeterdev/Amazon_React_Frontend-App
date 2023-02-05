import axios from "axios";

const BASE_URL = "http://localhost:8080/api/";

const Token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYjZhMmFmOWYwYTkwMzFkYjQ1ODM3ZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NDAyMTAzMywiZXhwIjoxNjc0MjgwMjMzfQ.XxY8AM4mKkVVWQK-dnFxHs3ZYieda_qfCzsQyHzFZRs";



  // Public Request 

  export const PublicRequest = axios.create({

    baseURL : BASE_URL,
   
  })




  // User Request
  export const UserRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    token: "Bearer " + Token,
  },
});
