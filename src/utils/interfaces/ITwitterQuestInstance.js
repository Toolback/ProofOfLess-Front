import cProvider from "./cProvider";
import TqAbi from "./TwitterQuest.json";
import {ethers} from "ethers"
require('dotenv').config()

const ITwitterQuestInstance = new ethers.Contract(
    "0xbb7c8f4C8408AdC1259113019B4a773B2CB178F3", 
    TqAbi.abi, 
    cProvider
    );

export default ITwitterQuestInstance;
