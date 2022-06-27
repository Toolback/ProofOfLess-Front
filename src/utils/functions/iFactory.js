import cProvider from "./cProvider.js"
import factoryContractAbi from "../../artifacts/src/contracts/nftFactory.sol/nftFactory.json";
import {ethers} from "ethers"

const iFactory = new ethers.Contract(
  "0x8da55DcF87EC7f11286Eb8B2770B418dbfC55B4E", 
  factoryContractAbi.abi, 
  cProvider
  );

export default iFactory;
