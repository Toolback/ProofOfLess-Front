import cProvider from "./cProvider";
import TqAbi from "./TwitterQuest.json";
import {ethers} from "ethers"
require('dotenv').config()

const ITwitterQuestInstance = new ethers.Contract(
    "0xAb0fD4623404930B352aA52E200Cc67B6fDD77EE", 
    TqAbi.abi, 
    cProvider
    );

export default ITwitterQuestInstance;
