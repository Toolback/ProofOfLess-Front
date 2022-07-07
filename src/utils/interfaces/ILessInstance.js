import cProvider from "./cProvider";
import LessAbi from "./LessToken.json";
import {ethers} from "ethers"
require('dotenv').config()

const iLessInstance = new ethers.Contract(
    "0x3e5D73D52F37Ba6DFAc9523B3EA9Fa45A856A9Ed", 
    LessAbi.abi, 
    cProvider
    );

export default iLessInstance;
