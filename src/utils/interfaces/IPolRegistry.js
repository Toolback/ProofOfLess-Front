import cProvider from "./cProvider";
import PRAbi from "./PolRegistry.json";
import {ethers} from "ethers"
require('dotenv').config()

const IPolRegistry = new ethers.Contract(
    "0xa8bAda58f8FD70A125eb1D6a33AD50270E7911d6", 
    PRAbi.abi, 
    cProvider
    );

export default IPolRegistry;
