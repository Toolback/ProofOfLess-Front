import cProvider from "./cProvider";
import LessAbi from "./LessToken.json";
import {ethers} from "ethers"
require('dotenv').config()

// Free Test USDC

const IFreeTokenInstance = new ethers.Contract(
    "0x9aa7fEc87CA69695Dd1f879567CcF49F3ba417E2", 
    LessAbi.abi, 
    cProvider
    );

export default IFreeTokenInstance;
