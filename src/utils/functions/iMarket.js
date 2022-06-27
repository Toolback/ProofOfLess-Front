import cProvider from "./cProvider.js"
import marketContractAbi from "../../artifacts/src/contracts/marketPlaceContract.sol/marketPlaceContract.json";
import {ethers} from "ethers"

const iMarket = new ethers.Contract(
  "0x29FD64EE3aeAA462DC910AFaC1374BC0cE740E97", 
  marketContractAbi.abi, 
  cProvider
  );

export default iMarket;
