require('dotenv').config();

const axios = require('axios');

export const isUser = async (params) => {
    const url = `http://localhost:8080/user/${params}/publicAddress` ;

    console.log("isUser : isUser() : params sent : ", params);
    return await axios
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