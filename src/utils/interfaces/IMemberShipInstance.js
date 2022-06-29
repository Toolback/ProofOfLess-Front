import cProvider from "./cProvider";
import MbAbi from "./MemberShip.json";
import {ethers} from "ethers"
require('dotenv').config()

const IMemberShipInstance = new ethers.Contract(
    "0x598A473B4dA4153e67F32af358c7D6F88f855511", 
    MbAbi.abi, 
    cProvider
    );

export default IMemberShipInstance;
