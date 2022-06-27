import cProvider from "./cProvider.js"
import vaultContractAbi from "../../artifacts/src/contracts/vaultContract.sol/vaultContract.json";
import {ethers} from "ethers"

const iVault = new ethers.Contract(
  "0x5EEb84Afc18014336322e177D3D9F198DAea6458", 
  vaultContractAbi.abi, 
  cProvider
  );

export default iVault;
