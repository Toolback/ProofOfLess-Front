require('dotenv').config();
const axios = require('axios');

export const getJSONUserById = async(uniqueId) => {
    const url = `http://localhost:8080/user/${uniqueId}`;
    
    return axios
        .get(url)
        .then(function (response) {
          console.log("Fetching User's Infos from DB after connect =>", response.data);

           return {
               response,
           };
        })
        .catch(function (error) {
            console.log(error)
            return {
                success: false,
                message: error.message,
            }
           
        });
};