import cProvider from "./cProvider";
import LessAbi from "./LessToken.json";
import {ethers} from "ethers"
require('dotenv').config()

const iLessInstance = new ethers.Contract(
    "0x27De9911D2bb23606bF2F6763B3c8Ea4907B0d07", 
    LessAbi.abi, 
    cProvider
    );

export default iLessInstance;
