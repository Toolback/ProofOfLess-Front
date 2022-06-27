require('dotenv').config();

const axios = require('axios');

export const getUserInitialData = async (params) => {
    const url = `http://localhost:8080/twitter/${params}/WUTD`;

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