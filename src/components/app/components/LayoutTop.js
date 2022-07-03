import '../../../css/app/LayoutTop.css'
import { useContext, useState } from 'react'

import { AppDataStoreContext } from '../../../StoreAppData'
// import { AppRouteStoreContext } from '../StoreAppRouter'

import { connectWallet } from '../../../utils/functions/ConnectFunctions'
// import { getCProvider } from '../../../utils/functions/getCProvider'

// import { getUserIdByUsername } from '../utils/functions/BackEnd/twitter/getUserIdByUsername'
import { getUserInitialData } from '../../../utils/functions/BackEnd/twitter/getUserInitialData'
import IMemberShipInstace from '../../../utils/interfaces/IMemberShipInstance'
import ITwitterQuestInstance from '../../../utils/interfaces/ITwitterQuestInstance'
import CreateUserModal from "./CreateUserModal.js";

import { ethers } from "ethers";
import { AddNetwork } from '../../../utils/functions/AddNetwork'

// Display differents scenes 

const AppLayoutTop = (destination, data) => {
  // const { dispatchAppRoute } = useContext(AppRouteStoreContext);
  const { stateAppData, dispatchAppData } = useContext(AppDataStoreContext)
  const [isOpen, setIsOpen] = useState(false);

  // const isConnected = Boolean(stateAppData.userStatus === ("Connected" || "Admin" || "Member"));
  const [isConnected, setIsConnected] = useState(false);

  // const actualChain = stateAppData.chainId

  function isAdmin(address) {
    let adminsAddresses = ['0x12ec67660ebbb6dff62378087fc69384d048b838', '0xf72cc5e36c42403c7318c832d9e388f3393216ce']
    for (let i = 0; i < adminsAddresses.length; i++) {
      if (address === adminsAddresses[i]) {
        return true;
      }
    }
  }

  async function handleConnectClick() {
    
    try {
      const { address, status, provider, chainId } = await connectWallet();
      if (chainId != 80001) {
        await AddNetwork()
      } else {
      let userChain = "Mumbai Testnet"
      // console.log("CHAIN ID ", chainId)
      let userAccounts = address
      let userAddress = address[0];
      let userStatus;
        let isMember = false;
        let userProfil = {}
        let userNftProfil = {}

      // const providerD = new ethers.providers.Web3Provider(window.ethereum);
      // await providerD.send("eth_requestAccounts", []);
      let memberStatus = await IMemberShipInstace.isOwner(userAddress)

      if (memberStatus) {
        userStatus = "Member";
        isMember = true;
        setIsConnected(true);
        let req1 = await IMemberShipInstace.usersInfos(userAddress)
        let userTokenId = parseInt(req1.tokenId.toString())
        let req2 = await IMemberShipInstace.userProfil(userTokenId, userAddress)

        userProfil.userName = req1.userName;
        userProfil.email = req1.email;
        userProfil.twitterUserName = req1.twitterUserName;
        userProfil.tokenId = parseInt(req1.tokenId.toString());
        userProfil.friendsAddress = req1.friendsAddress;


        userNftProfil.experience = parseInt(req2.experience.toString());
        userNftProfil.questAccepted = parseInt(req2.questAccepted.toString());
        userNftProfil.questCompleted = parseInt(req2.questCompleted.toString());
        userNftProfil.daoProposalCreated = parseInt(req2.daoProposalCreated.toString());
        userNftProfil.daoProposalCreatedAccepted = parseInt(req2.daoProposalCreatedAccepted.toString());
        userNftProfil.daoProposalVoted = parseInt(req2.daoProposalVoted.toString());
        userNftProfil.challengeReceived = parseInt(req2.challengeReceived.toString());
        userNftProfil.friendChallenged = parseInt(req2.friendChallenged.toString());

        console.log("USERINFO RETRIEVED", userProfil, userNftProfil )
      } else {
        userStatus = status;
        setIsConnected(true);
      }

      if (isAdmin(userAddress)) {
        userStatus = "Admin";

        // isMember = true; Paused for Minter Page still accessible
        setIsConnected(true);
      }

      let inTwitterWaitingList = await ITwitterQuestInstance.waitingList(userAddress);
      // console.log("Waiting list", inTwitterWaitingList);
      let isTwitterParticipant = await ITwitterQuestInstance.userTwitterData(userAddress)
      // console.log("User Twitter Quest Data", isTwitterParticipant[3].toString());


        let bal1 = await ITwitterQuestInstance.questBalance("0x9aa7fEc87CA69695Dd1f879567CcF49F3ba417E2")
        let bal2 = await ITwitterQuestInstance.userPoolShares(userAddress, "0x9aa7fEc87CA69695Dd1f879567CcF49F3ba417E2")
       
        let twitterQuestBal = parseInt(bal1.toString().slice(0, -6))
        let twitterUserBal = parseInt(bal2.toString().slice(0, -6))
      // let resMembersAddress = await IMemberShipInstace.retrieveMembersAddress();
      // let listMembersAddress = await resMembersAddress
      console.log("User Twitter BAL Data", twitterQuestBal, twitterUserBal);

      await dispatchAppData(
        {
          type: 'setAppData',
          ...stateAppData,
          userAccounts,
          userStatus,
          userAddress,
          userChain,
          userProfil,
          userNftProfil,
          isMember,
          twitterQuestBal,
          twitterUserBal,
          inTwitterWaitingList

        }
        
      );

      // console.log("userStatus: ", stateAppData.userStatus, userStatus, "Admin")
      // console.log("userisMember: ", stateAppData.isMember, isMember, "true")


      walletListenerAll();


      // // Create New User Table if address doesn't exist in DB
      // const userDb = await isUser(userAddress);
      // if (userDb.user[0] === undefined) {
      //   setIsOpen(true)
      // }
    }} catch (e) {
      console.log("Connect Button : Error! Connection WEB3 :", e.message);
      return e.message
    }
  }
  // console.log("results Members Address After Click Connect", stateAppData.userAddress, stateAppData.listMembersAddress)
  console.log("USERINFO RETRIEVEDAfter", stateAppData.userProfil, stateAppData.userNftProfil )

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
          setIsConnected(false)
          window.location.reload(false)
          // console.log(" - walletListenerAll() : stateAppData.accounts After Dispatch", stateAppData.userAddress)
        }
      })

      window.ethereum.on("chainChanged", (_chainId) => {
        let chainId = parseInt(_chainId)
        if (chainId > 0) {
          dispatchAppData({ type: 'setAppData', chainId })
          // console.log(" - walletListenerAll() : stateAppData.chainId After Dispatch", chainId, stateAppData.chainId)
          setIsConnected(false)
          window.location.reload(false)

        }
      })
    }
  }



  return (
    <div className="LayoutTop-box-container noselect">
      <div className="LayoutTop-topbox-left-box">
        <a  className='txt2' href="/"><h2 className='txt2'>Proof Of Less</h2></a>
      </div>

      <div className="LayoutTop-topbox-right-box">

        {/* <div className="atrb-web3-buttonsConnect" id="AppBridge">

          <button>Bridge</button>
        </div> */}
        <div className="atrb-web3-buttonsConnect" id="AppChain">
          {isConnected ? <button>Chain : {stateAppData.userChain}</button> : 
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


    </div>

  )
};

export default AppLayoutTop;




