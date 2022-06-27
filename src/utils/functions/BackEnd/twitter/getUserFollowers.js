require('dotenv').config();

const axios = require('axios');

export const getUserFollowers = async () => {
    const url = `https://api.twitter.com/2/users/1388050658960543747/followers`;
                // https://api.twitter.com/2/users/:id/followers

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