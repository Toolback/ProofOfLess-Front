import cProvider from "./cProvider";
import MbAbi from "./MemberShip.json";
import {ethers} from "ethers"
require('dotenv').config()

const IMemberShipInstance = new ethers.Contract(
    "0x386fC7e397A7a173bC269d31a9f9147afea10D34", 
    MbAbi.abi, 
    cProvider
    );

export default IMemberShipInstance;
