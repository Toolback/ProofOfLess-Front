import { useState, useContext, useEffect, useCallback } from "react";
// import { RiCloseLine } from "react-icons/ri";
import "./TwitterQDetails.css"
import { AppDataStoreContext } from '../../../StoreAppData'
import twitterBird from "../../../assets/Twitter_Bird.svg"
import { RiCloseLine } from "react-icons/ri";

import ITwitterQuestInstance from "../../../utils/interfaces/ITwitterQuestInstance";
import IFreeTokenInstance from '../../../utils/interfaces/IFreeTokenInstance';


const TwitterQDetails = ({ setIsOpen }) => {
  const { stateAppData, dispatchAppData } = useContext(AppDataStoreContext)
  let userStatus = stateAppData.userStatus
  const isConnected = Boolean(userStatus !== 'connect to retrieve');

  const [amount, setAmount] = useState(0e6);

  let isInWaitingList = stateAppData.inTwitterWaitingList;
  
  let tqS = stateAppData.twitterDataSummary;
  let tqStartAt = tqS.cycleStartAt;
  let tqEndAt = tqS.cycleEndAt;
  let tqActualQuestBal = tqS.actualQuestBalance
  let tqActualParticipantsNumber = tqS.actualParticipantsNumber
  let tqActualWaitingListNumber = tqS.actualWaitingListNumber;
  let tqActualUserBal = stateAppData.twitterUserBal;
  let tqEntryCost = stateAppData.twitterDataSummary.entryCost;

  const retrieveMembersInfos = useCallback(async () => {
    let twitterDataSummary = {}
    let req = {}
    req = await ITwitterQuestInstance.getQuestSummarize();
    twitterDataSummary.lessTokenAddress = await req.lessTokenAddress;
    twitterDataSummary.memberShipTokenAddress = await req.memberShipTokenAddress;
    twitterDataSummary.entryToken = await req.entryToken;
    twitterDataSummary.entryCost = parseInt(await req.entryCost.toString().slice(0, -6));
    twitterDataSummary.amountLessReward = parseInt(await req.amountLessReward.toString());
    twitterDataSummary.actualFees = parseInt(await req.actualFees.toString().slice(0, -6));
    twitterDataSummary.actualQuestBalance = parseInt(await req.actualQuestBalance.toString().slice(0, -6));
    let date1 = new Date(await req.durationPeriod * 1000)
    twitterDataSummary.durationPeriod = date1.toLocaleString();
    let date2 = new Date(await req.cycleStartAt * 1000)
    twitterDataSummary.cycleStartAt = date2.toLocaleString();
    let date3 = new Date(await req.cycleEndAt * 1000)
    twitterDataSummary.cycleEndAt = date3.toLocaleString();
    twitterDataSummary.actualParticipantsNumber = parseInt(await req.actualParticipantsNumber.toString());
    twitterDataSummary.actualWaitingListNumber = parseInt(await req.actualWaitingListNumber.toString());
    twitterDataSummary.actualWaitingListSubscribeAddress = await req.actualWaitingListSubscribeAddress;

    // let userBal = await ITwitterQuestInstance.userPoolShares(stateAppData.userAddress, "0x9aa7fEc87CA69695Dd1f879567CcF49F3ba417E2")

    console.log("User Supply Funds", req)

    await dispatchAppData({
      type: 'setAppData',
      ...stateAppData,
      twitterDataSummary
    })

  })


  useEffect(() => {
    if (isConnected) {
      retrieveMembersInfos()
    }
  }, [stateAppData.userStatus])



  const handleWithdraw = async () => {
    const req = await ITwitterQuestInstance.withdrawFromPool("0x9aa7fEc87CA69695Dd1f879567CcF49F3ba417E2", amount)
    const data = await req
    const res = await ITwitterQuestInstance.userPoolShares()
    console.log("CreateUserModal : handleCreateUser() data from db after createUser(): ", data)
  }

  const handleSupply = async () => {
    let allowAmount = (amount) + 10e6
    let supplyAmount = amount + 1e6
    const allowance = await IFreeTokenInstance.approve("0x33b5B87a232e23590a65CC0b10EA710d153D1455", allowAmount)
    const req = await ITwitterQuestInstance.supplyToPool("0x9aa7fEc87CA69695Dd1f879567CcF49F3ba417E2", supplyAmount)
    const data = await req
    const res =
      console.log("CreateUserModal : handleCreateUser() data from db after createUser(): ", data)
  }

  async function handleMintFreeToken() {
    let numToMint = 100e6
    await IFreeTokenInstance.mint(stateAppData.userAddress, numToMint)
  }

  function renderWaitingStatus() {
    if (isInWaitingList) {
      return(<>✅</>)
    } else {
      return (<>❌</>)
    }
  }
  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <div className="modalTwitter-Logo-Container">
              <img src={twitterBird} className="ModalTwitter-TwitterBird" />
            </div>
            <h3 className="heading">Twitter Quest Summary</h3>
          </div>
          <button className="closeBtn" onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />

          </button>
          <div className="modalContent">
            <p>Actual Cycle Started At :</p>
          <p>{tqStartAt}</p>
            <p>Actual Cycle Ending / Beginning Of The Next</p>  
            <p>{tqEndAt}</p>
            <div className='ModalTwitter-renderJoinedQuests'>

              <div className='ModalTwitter-renderJoinedQuests-left'>


                <p>Total Pool Gain :</p>
                <p>{tqActualQuestBal} Usdc</p>
                <p>Your Balance :</p>
                <p>{tqActualUserBal} Usdc</p>

              </div>

              <div className='ModalTwitter-renderJoinedQuests-right'>
                <p>Total Participants : {tqActualParticipantsNumber}</p>
                <p>Total Waiting List : {tqActualWaitingListNumber}</p>
                <p>Participe : ❌</p>
                <p>Waiting List : {renderWaitingStatus()}</p>

              </div>
            </div>
            <p>Entry Cost : {tqEntryCost}</p>
            <p>Deposit / Withdraw</p>
            <input type='text' onChange={e => setAmount(e.target.value)} value={amount} />

          </div>
          <div className="modalActions">
            <div className="actionsContainer">
              <button className="deleteBtn" onClick={() => handleSupply()}>
                Supply
              </button>
              <button className="deleteBtn" onClick={() => { handleMintFreeToken() }}>(Mint Free TUsdc)</button>
              <button
                className="deleteBtn" // old cancelBtn
                onClick={() => handleWithdraw()}
              >
                Withdraw
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TwitterQDetails;