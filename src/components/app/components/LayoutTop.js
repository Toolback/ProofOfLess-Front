import '../../../css/app/LayoutTop.css'
import { useContext, useState } from 'react'

import { AppDataStoreContext } from '../../../StoreAppData'
// import { AppRouteStoreContext } from '../StoreAppRouter'

import { connectWallet } from '../../../utils/functions/ConnectFunctions'
import { isUser } from '../../../utils/functions/BackEnd/users/isUser'
// import { getUserIdByUsername } from '../utils/functions/BackEnd/twitter/getUserIdByUsername'
import { getUserInitialData } from '../../../utils/functions/BackEnd/twitter/getUserInitialData'


import CreateUserModal from "./CreateUserModal.js";

const { ethers } = require("ethers");

// Display differents scenes 

const AppLayoutTop = (destination, data) => {
  // const { dispatchAppRoute } = useContext(AppRouteStoreContext);
  const { stateAppData, dispatchAppData } = useContext(AppDataStoreContext)
  const [isOpen, setIsOpen] = useState(false);

  const isConnected = Boolean(stateAppData.userStatus === 'Connected');

  // const actualChain = stateAppData.chainId;




  // const generateUserData = (userAddress) => {
  //   retrieveUserInformations(userAddress).then(res => {
  //     let dDataAppData = res.response.data; 
  //     dispatchAppData({ type: 'setAppData', dDataAppData}) })
  //   console.log('db response to front: User infos', stateAppData)
  // }

  async function handleConnectClick() {
    if (window.ethereum) {

      const { address, status } = await connectWallet();
      let userAccounts = address
      let userAddress = address[0];
      let userStatus;

      if (userAddress === '0x12EC67660ebbb6dFf62378087FC69384D048b838') {
        userStatus = "Admin"
      } else {
        userStatus = status;
      }
      await dispatchAppData(
        {
          type: 'setAppData',
          userAccounts,
          userStatus,
          userAddress
        }
      );

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      // const signer = await provider.getSigner(userAddress);


      const network = await provider.getNetwork();
      // const networkId = network.chainId;
      const chainId = network.name;

      await dispatchAppData(
        {
          type: 'setAppData',
          userAccounts,
          userStatus,
          userAddress,
          chainId
        }
      );
      walletListenerAll();
      // console.log(" AppLayout Top : handleConnectClick() : Final stateAppData Result After Connect ?! : ", stateAppData, stateAppData.userAddress)

      const userDb = await isUser(userAddress);


      // Create New User Table if address doesn't exist in DB
      if (userDb.user[0] === undefined) {
        setIsOpen(true)
      }


    }
  }

  function walletListenerAll() {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          let userAddress = accounts[0]
          dispatchAppData(
            {
              type: 'setAppData',
              accounts,
              userAddress
            }
          )
          console.log(" - walletListenerAll : stateAppData.accounts After Dispatch", stateAppData.accounts)
        }
      })

      window.ethereum.on("chainChanged", (_chainId) => {
        let chainId = parseInt(_chainId)
        if (chainId > 0) {
          dispatchAppData({ type: 'setAppData', chainId })
          console.log(" - walletListenerAll : stateAppData.chainId After Dispatch", chainId, stateAppData.chainId)

        }
      })
    }
  }

  async function handleLoadTwitterData() {
    // const resp = await getUserIdByUsername(userName);
    // const userId = resp.user.data.id

    const updateData = await getUserInitialData(stateAppData.userAddress);

    console.log("... /! : FINAL Results HERE", updateData);
  }

  return (
    <div className="LayoutTop-box-container noselect">
      <div className="LayoutTop-topbox-left-box">
        <h2 id="txt2">Proof Of Less</h2>
      </div>

      <div className="LayoutTop-topbox-right-box">

          <div className="atrb-web3-buttonsConnect" id="AppBridge">
            <button onClick={() => handleLoadTwitterData()}>LoadData</button>

            {/* <button>Bridge</button> */}
          </div>
          <div className="atrb-web3-buttons" id="AppChain">
            {isConnected ? (
              "Chain: " +
              String(stateAppData.chainId)
            ) : (
              "Chain:" +
              String(stateAppData.chainId)
            )}
          </div>

          <div className="atrb-web3-buttonsConnect" id="AppWallet">
            {isConnected ? (
              "Connected: " +
              String(stateAppData.userAddress).substring(0, 5) +
              "..." +
              String(stateAppData.userAddress).substring(39)
            ) : (
              <button onClick={() => handleConnectClick()}>Connect</button>
            )}
            {isOpen && <CreateUserModal setIsOpen={setIsOpen} />}



        </div>
      </div>
      {/* <div className="GameNavButton" id="BHome" onClick={()=> handleClick('home')}>Home</div> */}


    </div>

  )
};

export default AppLayoutTop;




