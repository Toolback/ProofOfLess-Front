import '../../../css/app/LayoutTop.css'
import { useContext, useState } from 'react'

import { AppDataStoreContext } from '../../../StoreAppData'
// import { AppRouteStoreContext } from '../StoreAppRouter'

import { connectWallet } from '../../../utils/functions/ConnectFunctions'
// import { getCProvider } from '../../../utils/functions/getCProvider'

import { isUser } from '../../../utils/functions/BackEnd/users/isUser'
// import { getUserIdByUsername } from '../utils/functions/BackEnd/twitter/getUserIdByUsername'
import { getUserInitialData } from '../../../utils/functions/BackEnd/twitter/getUserInitialData'


import CreateUserModal from "./CreateUserModal.js";

import { ethers } from "ethers";

// Display differents scenes 

const AppLayoutTop = (destination, data) => {
  // const { dispatchAppRoute } = useContext(AppRouteStoreContext);
  const { stateAppData, dispatchAppData } = useContext(AppDataStoreContext)
  const [isOpen, setIsOpen] = useState(false);

  const isConnected = Boolean(stateAppData.userStatus === ('Connected' && 'Admin'));

  // const actualChain = stateAppData.chainId

  async function handleConnectClick() {
    
    try {
      // console.log("Test provider EUUUH", getCProvider())
      const { address, status, provider, chainId} = await connectWallet();
      let userAccounts = address
      let userAddress = address[0];
      let userStatus;

      // const providerD = new ethers.providers.Web3Provider(window.ethereum);
      // await providerD.send("eth_requestAccounts", []);

      if (userAddress === '0x12ec67660ebbb6dff62378087fc69384d048b838') {
        userStatus = "Admin"
      } else {
        userStatus = status;
      }
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


      // // Create New User Table if address doesn't exist in DB
      // const userDb = await isUser(userAddress);
      // if (userDb.user[0] === undefined) {
      //   setIsOpen(true)
      // }
    } catch (e) {
      console.log("Error Connection WEB3 :", e.message);
      return e.message
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
          // console.log(" - walletListenerAll() : stateAppData.accounts After Dispatch", stateAppData.userAddress)
        }
      })

      window.ethereum.on("chainChanged", (_chainId) => {
        let chainId = parseInt(_chainId)
        if (chainId > 0) {
          dispatchAppData({ type: 'setAppData', chainId })
          // console.log(" - walletListenerAll() : stateAppData.chainId After Dispatch", chainId, stateAppData.chainId)

        }
      })
    }
  }

  async function handleLoadTwitterData() {
    // const resp = await getUserIdByUsername(userName);
    // const userId = resp.user.data.id

    const updateData = await getUserInitialData(stateAppData.userAddress);

    // console.log("... /! : FINAL Results HERE", updateData);
  }

  return (
    <div className="LayoutTop-box-container noselect">
      <div className="LayoutTop-topbox-left-box">
        <a  className='txt2' href="/"><h2 className='txt2'>Proof Of Less</h2></a>
      </div>

      <div className="LayoutTop-topbox-right-box">

        <div className="atrb-web3-buttonsConnect" id="AppBridge">
          <button onClick={() => handleLoadTwitterData()}>LoadData</button>

          {/* <button>Bridge</button> */}
        </div>
        <div className="atrb-web3-buttonsConnect" id="AppChain">
          {isConnected ? <button>Chain : ${stateAppData.chainId}</button> : 
          <button>Chain :</button>}
          
        </div>

        <div className="atrb-web3-buttonsConnect" id="AppWallet">
          {isConnected ? (
            <button>
            {String(stateAppData.userAddress).substring(0, 5) +
            "..." +
              String(stateAppData.userAddress).substring(39)}
              </button>
          ) : (
            <button onClick={() => handleConnectClick()} id="atrb-web3-ConnectWallet">Connect</button>
          )}
          {isOpen && <CreateUserModal setIsOpen={setIsOpen} />}



        </div>
      </div>
      {/* <div className="GameNavButton" id="BHome" onClick={()=> handleClick('home')}>Home</div> */}


    </div>

  )
};

export default AppLayoutTop;




