import cProvider from "./cProvider";
import MbAbi from "./MemberShip.json";
import {ethers} from "ethers"
require('dotenv').config()

const IMemberShipInstance = new ethers.Contract(
    "0x6cE4c35fBA1A33b7Bf49959bBeE3060c5EFD8Fe7", 
    MbAbi.abi, 
    cProvider
    );

export default IMemberShipInstance;
