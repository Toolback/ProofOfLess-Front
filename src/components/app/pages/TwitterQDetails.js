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

  const [amount, setAmount] = useState();

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
    // twitterDataSummary.lessTokenAddress = await req.lessTokenAddress;
    // twitterDataSummary.memberShipTokenAddress = await req.memberShipTokenAddress;
    // twitterDataSummary.entryToken = await req.entryToken;
    twitterDataSummary.entryCost = parseInt(await req.entryCost.toString().slice(0, -6));
    twitterDataSummary.amountLessReward = parseInt(await req.amountLessReward.toString());
    // twitterDataSummary.actualFees = parseInt(await req.actualFees.toString().slice(0, -6));
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
    let allowAmount = parseInt(amount.toString() + "000000")
    let supplyAmount = parseInt(amount.toString() + "000000")
    // await IFreeTokenInstance.approve("0x49FE770a7d8dff680D2933F6cC0Cc184bF644FD3", allowAmount)
    // await IFreeTokenInstance.increaseAllowance("0x49FE770a7d8dff680D2933F6cC0Cc184bF644FD3", allowAmount)

    const req = await ITwitterQuestInstance.supplyToPool("0x9aa7fEc87CA69695Dd1f879567CcF49F3ba417E2", allowAmount)
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
      return (<>✅</>)
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
            <b><h2 className="ModalTwitter-heading">Twitter Quest Summary</h2></b>
          </div>
          <button className="closeBtn" onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />

          </button>
          <div className="modalContent">
            <div className="modalContent-left">
              <h4>Rule </h4>
              <p>Tweet less than your 6 month weekly average for 4 consecutive week.</p>
              <p>❗<b>Read Carefully</b></p>
              <p>To automatically participate in the next quest, you need to: </p>
              <p>- Supply at least <b>10 USDC</b></p>
              <p>- Subscribe to the <b>Waiting List</b></p>
              <p>[Subscription is free while testing]</p>
            </div>

            <div className="modalContent-right">

              <b><p>Actual Cycle Started At</p></b>
              <p>{tqStartAt}</p>
              <b><p>Actual Cycle Ending / Beginning Of The Next</p></b>
              <p>{tqEndAt}</p>
              <div className='ModalTwitter-renderJoinedQuests'>

                <div className='ModalTwitter-renderJoinedQuests-left'>


                  <p>Total Pool Gain</p>
                  <p className="buttonTestBgBlue">30 Usdc</p>
                  <p>Your Balance</p>
                  <p className="buttonTestBgBlue">{tqActualUserBal} Usdc</p>
                  <p>Participe ❌</p>

                </div>

                <div className='ModalTwitter-renderJoinedQuests-right'>
                  <p>Total Participants</p>
                  <p className="buttonTestBgBlue">{tqActualParticipantsNumber}</p>
                  <p>Total Waiting List</p>
                  <p className="buttonTestBgBlue">{tqActualWaitingListNumber}</p>

                  <p>Waiting List {renderWaitingStatus()}</p>
                </div>

              </div>
            </div>

          </div>
          <div className="modalActions">
            {isConnected ? (<>
              <p>Entry Cost <p className="buttonTestBgBlue">{tqEntryCost} Usdc</p></p>
            <p>Deposit / Withdraw</p>
            <input type='text' onChange={e => setAmount(e.target.value)} value={amount} />

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
            </>) : (<>
              <p className="buttonTestBgBlue">Connect to Join</p>
            </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TwitterQDetails;