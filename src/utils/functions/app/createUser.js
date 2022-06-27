import {pinJSONUserToDB} from "../BackEnd/users/pinJSONUserToDB"

require("dotenv").config();

/////////////////////////////////
/* Metadata Variables 
*/
/////////////////////////////////

// Add db nonce later
let nonce = 0;

export const createUser = async (name, email, twitterUsername) => {
    if (name.trim() === "Enter Name") {
        return {
          success: false,
          status: "❗Please make sure all fields are completed before minting.",
        };
    }

    let uniqueId = nonce;
    
////////////////////////////////////////////////////////////////////////
  //Push New User to DB
////////////////////////////////////////////////////////////////////////

    const dbData = new Object();
    dbData.id = uniqueId;
    dbData.name = name;
    dbData.publicAddress = window.ethereum.selectedAddress;
    dbData.email = email;
    dbData.twitterUserName = twitterUsername;

    console.log("createUser.js : createUser() : dbData Object sent to the DB", dbData);

    const dbResponse = await pinJSONUserToDB(dbData);
    if (!dbResponse.success) {
        return {
            success: false,
            status: "😢 Something went wrong while uploading new user data to DB"
        }
    }
    console.log("Returned DbResponse object + _id :", dbResponse)
    const bdLink = `http://localhost:8080/dbUser/${uniqueId}`

    ////////////////////////////////////////////////////////////////////////
  //Push New User to SM
////////////////////////////////////////////////////////////////////////
    // const smData = new Object();


    return {
        success: true,
        status: "✅ User Created at : " + bdLink
    }
}