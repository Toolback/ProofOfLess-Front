import cProvider from "./cProvider";
import LessAbi from "./LessToken.json";
import {ethers} from "ethers"
require('dotenv').config()

const iLessInstance = new ethers.Contract(
    "0x3793570D78bCBCc77acD000294Ff0Be8A9efc7AC", 
    LessAbi.abi, 
    cProvider
    );

export default iLessInstance;
