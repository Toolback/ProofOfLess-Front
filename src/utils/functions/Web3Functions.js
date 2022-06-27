// import iFactory from "./iFactory";
// import iMarket from "./iMarket";
// import iVault from "./iVault";
// import iTokenInstance from "./iTokenInstance"
// import cProvider from './cProvider'
// Contracts Fetching 

// const ethers = require("ethers");

// let NftFactoryAddress = "0xBcc0E064aaB8c7C633E44fE5D36418c20a5E4525"//process.env.REACT_APP_ER721_ADDRESS
// let marketPlaceContractAddress = "0x57AA7BD8003b04A039f321C732eC69D60e986167"
// let vaultContractAddress = "0x8D59E997A864A4E6619c70ff0895516b5bd2A384" 
// process.env.REACT_APP_VAULTCONTRACT_ADDRESS

// const provider = new ethers.providers.Web3Provider(window.ethereum);
// const signer = provider.getSigner();

// const vaultContract = new ethers.Contract(
//   vaultContractAddress,
//   vaultContractAbi.abi,
//   cProvider
// );

// const marketPlaceContract = new ethers.Contract(
//   marketPlaceContractAddress,
//   marketPlaceAbi.abi,
//   cProvider
// );

// const marketPlaceReadContract = new ethers.Contract(
//   marketPlaceContractAddress,
//   marketPlaceAbi.abi,
//   cProvider
// );

// const nftFactoryContract = new ethers.Contract(
//   NftFactoryAddress,
//   nftFactoryAbi.abi,
//   cProvider
// );

// const nftFactoryReadContract = new ethers.Contract(
//   NftFactoryAddress,
//   nftFactoryAbi.abi,
//   cProvider
// );


// export const erc721Contract = new ethers.Contract(erc721Address, erc721Abi.abi, signer);

// export const erc20Contract =  new ethers.Contract(erc20Address, erc20Abi.abi, signer);

// export const vaultContract = new ethers.Contract(vaultContractAddress, vaultContractAbi.abi, signer);

// export const createNewNft = async(tokenUri, nftClassType) => {
//   const newTokenCreated = await iFactory.createNewToken(tokenUri, nftClassType);
//   return {newTokenCreated};
// }

// export const fetchCreatedNft = async() => {
//   const listedTokens = await iFactory.getTokens();
//   console.log("TEST232:", {listedTokens})
//   return {listedTokens};
// }

// // Mint Functions
// export const handleMint = async (mintAmount) => {
//   if (window.ethereum) {
//     // const provider = ethers.providers.Web3Provider(window.ethereum);
//     // const signer = provider.getSigner();

//     // const contract = new ethers.Contract(
//     //   HealthyLeafAddress,
//     //   HealthyLeafAbi.abi,
//     //   signer
//     // );
//     try {
//       // /!\ TO FIX : Incorrect amount type (BN ? 0.2 Problem ? (better entier ?) fix with correct decimals ?)
//       // {value: ethers.utils.parseEther((0.02 * mintAmount).toString())}, 

//       // const response = await erc721Contract.mint(BigNumber.from(mintAmount));
//       // console.log('response', response)

//     } catch (err) {
//       console.log("error", err)
//     }
//   }
// }

// // Data Fetching Functions
// export const retrieveMarketItem = async() => {
//   const itemRetrieved = await iMarket.getUnsoldItems()
//   // console.log("firstStep Item Retrieved : ", itemRetrieved)
//   return itemRetrieved;
// }

// export const retrieveUserDatas = async (userAddress, signer) => {


//   // const erc721Contract =  new ethers.Contract(erc721Address, erc721Abi.abi, signer);
//   // const erc20Contract =  new ethers.Contract(erc20Address, erc20Abi.abi, signer);
//   // const vaultContract = new ethers.Contract(vaultContractAddress, vaultContractAbi.abi, signer);

//   // const erc721BalanceOf = await nftFactoryContract.balanceOf(userAddress);
//   // const results = ethers.BigNumber.from(erc721BalanceOf);

//   // console.log("- RetrieveUserDatas : Balance of User's Tokens :", parseInt(results._hex))

//   // return parseInt(results._hex)


//   // Retrieve stacked item ID on vaultContract by user
//   // const erc721IdStacked = await vaultContract;  
//   // Retrieve items actually on sell by user 

//   // Retrieve Governance Funds of user
//   // const erc20BalanceOf = await erc20Contract.balanceOf(userAddress);

//   //   erc20BalanceOf: erc20BalanceOf,
  
//   // erc721BalanceOf()





//   // const stackedFunds = await vaultContract.
// }

// export const retrieveStatisticsDatas = async () => {
//   const erc721TotalSupply = await erc721Contract.totalSupply();
//   const erc721MaxSupply = await erc721Contract.maxSupply();
//   const erc721MintPrice = await erc721Contract.mintPrice();

//   const erc20TotalSupply = await erc20Contract.totalSupply();
//   const erc20MaxSupply = await erc20Contract.maxSupply();

//   // Retrieve Current Stacked Funds on User's Nft 
//   // const stackedFunds = await vaultContract.
// }

// export const retrieveMarketDatas = async () => {
//   const itemsUnsold = await vaultContract.getUnsoldItems();
//   const itemsByOwner = await vaultContract.getItemsByOwner();

// }


// export const retrieveEarnDatas = async () => {
//   const stackedFunds = await vaultContract.userStackedsFunds();


// }

/* 
- Stacked Funds & tokens 
- Actual APY (progress bar)
-






*/

