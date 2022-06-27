require('dotenv').config();
// const key = "fd7a2a26c66d7829b627";
// const secret = "32703e3cc7663891a0a61deae8679dcf0d8c5498b908886810efb3ddc55812ef";
const axios = require('axios');

export const updateJSONUsertoDB = async(JSONBody, uniqueId) => {
    const url = `http://localhost:8080/user/${uniqueId}`;
    console.log("sending to db User Update =>", JSONBody)
    return axios
        .patch(url, JSONBody)
        .then(function (response) {
           return {
               response,
               success: true,
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