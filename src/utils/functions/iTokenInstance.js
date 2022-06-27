import cProvider from "./cProvider.js"
import tokenContractAbi from "../../artifacts/src/contracts/marketPlaceContract.sol/marketPlaceContract.json";
import {ethers} from "ethers"

const iTokenInstance = (address) => {
  return new ethers.Contract(
    address, 
    tokenContractAbi.abi, 
    cProvider
    );
};
export default iTokenInstance;
