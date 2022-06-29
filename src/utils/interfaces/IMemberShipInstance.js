import cProvider from "./cProvider";
import MbAbi from "./MemberShip.json";
import {ethers} from "ethers"
require('dotenv').config()

const IMemberShipInstance = new ethers.Contract(
    "0x0EEeDeF115e5698436293caDE89Bc215374e3C88", 
    MbAbi.abi, 
    cProvider
    );

export default IMemberShipInstance;
