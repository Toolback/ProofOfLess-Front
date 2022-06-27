const ethers = require("ethers");

let cProvider;

if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  // We are in the browser and metamask is running.
  window.ethereum.request({ method: "eth_requestAccounts" });
  let provider = new ethers.providers.Web3Provider(window.ethereum);
  cProvider = provider.getSigner();
} else {
  // We are on the server *OR* the user is not running metamask
  cProvider = new ethers.providers.JsonRpcProvider(
    "https://polygon-mumbai.g.alchemy.com/v2/pCiM9OJB_7EqE0lZ4Po19LqzoHkwlzVs"
)
}

export default cProvider;