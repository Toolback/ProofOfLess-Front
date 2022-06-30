import cProvider from "./cProvider";
import MbAbi from "./MemberShip.json";
import {ethers} from "ethers"
require('dotenv').config()

const IMemberShipInstance = new ethers.Contract(
    "0xf716bA8183a6d552A177670a3950AE2Dec5F1B65", 
    MbAbi.abi, 
    cProvider
    );

export default IMemberShipInstance;
