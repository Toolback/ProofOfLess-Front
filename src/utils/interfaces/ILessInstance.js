import cProvider from "./cProvider";
import LessAbi from "./LessToken.json";
import {ethers} from "ethers"
require('dotenv').config()

const iLessInstance = new ethers.Contract(
    "0x7DBdBFD7CF12384a255dc78c496e184e86DB35Fc", 
    LessAbi.abi, 
    cProvider
    );

export default iLessInstance;
