require('dotenv').config();
// const key = "fd7a2a26c66d7829b627";
// const secret = "32703e3cc7663891a0a61deae8679dcf0d8c5498b908886810efb3ddc55812ef";
const axios = require('axios');

export const pinJSONUserToDB = async(JSONBody) => {
    const url = `http://localhost:8080/user`;
    return axios
        .post(url, JSONBody)
        .then(function (response) {
           return {
               success: true,
               newPlayer: response.data
            //    pinataUrl: "https://gateway.pinata.cloud/ipfs/" + response.data.IpfsHash
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