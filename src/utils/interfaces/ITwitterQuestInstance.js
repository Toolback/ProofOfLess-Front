import cProvider from "./cProvider";
import TqAbi from "./TwitterQuest.json";
import {ethers} from "ethers"
require('dotenv').config()

const ITwitterQuestInstance = new ethers.Contract(
    "0x49FE770a7d8dff680D2933F6cC0Cc184bF644FD3", 
    TqAbi.abi, 
    cProvider
    );

export default ITwitterQuestInstance;
