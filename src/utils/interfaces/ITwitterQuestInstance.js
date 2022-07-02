import cProvider from "./cProvider";
import TqAbi from "./TwitterQuest.json";
import {ethers} from "ethers"
require('dotenv').config()

const ITwitterQuestInstance = new ethers.Contract(
    "0x33b5B87a232e23590a65CC0b10EA710d153D1455", 
    TqAbi.abi, 
    cProvider
    );

export default ITwitterQuestInstance;
