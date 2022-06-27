require('dotenv').config();

const axios = require('axios');

export const getAllUser = async () => {
    const url = `http://localhost:8080/user`;

    console.log("isUser : isUser() : http request : ", url);
    return axios
        .get(url)
        .then(response => {
            return {
                success: true,
                user: response.data
            }
         })
        .catch(error => {
            console.log("uups, looks like something went wrong Q.Q",error)
            return {
                success: false,
                user: error.message
            }
         })
}