import cProvider from "./cProvider";
import LessAbi from "./LessToken.json";
import {ethers} from "ethers"
require('dotenv').config()

const iLessInstance = new ethers.Contract(
    "0x84abAF32A21a90fF3561Ff4c4De7E2c8A5DE3E1b", 
    LessAbi.abi, 
    cProvider
    );

export default iLessInstance;
