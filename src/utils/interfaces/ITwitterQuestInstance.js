import cProvider from "./cProvider";
import TqAbi from "./TwitterQuest.json";
import {ethers} from "ethers"
require('dotenv').config()

const ITwitterQuestInstance = new ethers.Contract(
    "0xBfc5a187dFa81d0f2C1f0E6d8604d3161b858778", 
    TqAbi.abi, 
    cProvider
    );

export default ITwitterQuestInstance;
