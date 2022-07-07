import { useContext, useEffect, useState, useCallback } from 'react'
import "../../../css/app/Quests.css"
import { AppDataStoreContext } from '../../../StoreAppData'

import QuestsDesign from "../../../assets/QuestIcon.png"
import ITwitterQuestInstance from '../../../utils/interfaces/ITwitterQuestInstance';
import NftMinter from "./NftMinter"
import twitterBird from "../../../assets/Twitter_Bird.svg"

import TwitterQDetails from './TwitterQDetails'
const Quests = () => {
    const { stateAppData, dispatchAppData } = useContext(AppDataStoreContext)
    let userStatus = stateAppData.userStatus
    const isConnected = Boolean(userStatus !== 'connect to retrieve');
    const isNotMember = Boolean(userStatus == 'Connected')
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);



    const retrieveTwitterQuestInfos = useCallback(async () => {
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


        await dispatchAppData({
            type: 'setAppData',
            ...stateAppData,
            twitterDataSummary,
        })

    })


    useEffect(() => {
        retrieveTwitterQuestInfos()

    }, [stateAppData.userStatus])




    async function handleJoinQuest() {
        let res = await ITwitterQuestInstance.registerToWaitingList()
        let ress = await res
        let res2 = await ITwitterQuestInstance.waitingList(stateAppData.userAddress)
        let inTwitterWaitingList = true
        let userStatus = stateAppData.userStatus;
        console.log("Quest Joinded ! ", ress, res2, inTwitterWaitingList);

        await dispatchAppData({
            type: 'setAppData',
            ...stateAppData,
            inTwitterWaitingList,
            userStatus
        })
    }

    async function handleUnscubscribeTwitterQuest() {
        let userAddress = stateAppData.userAddress
        let waitingListAddresses = await ITwitterQuestInstance.getAllSubscribed()
        let userIndex;

        for (let i = 0; i < waitingListAddresses.length; i++) {
            if (waitingListAddresses[i].toLowerCase() == userAddress) {
                userIndex = i;
            }
        }
        console.log("handleUnscubscribeTwitterQuest() ! ", userAddress, waitingListAddresses, userIndex);

        let res = await ITwitterQuestInstance.unregisterFromWaitingList(userIndex)
        let ress = await res
        let resTest = await ITwitterQuestInstance.waitingList(userAddress);
        let inTwitterWaitingList = false
        let userStatus = stateAppData.userStatus;

        console.log("Quest Successfully Unscubscribed ! ", ress, res, resTest);
        await dispatchAppData({
            type: 'setAppData',
            ...stateAppData,
            inTwitterWaitingList,
            userStatus // ?? Update Status ??
        })
    }




    function renderJoinedQuests() {

        let isInWaitingList = stateAppData.inTwitterWaitingList;

        let rjqQuestBal = stateAppData.twitterDataSummary.actualQuestBalance
        let rjqActualUserBal = stateAppData.twitterUserBal;



        return (
            <>
                {isInWaitingList ? (
                    <div className='Quests-renderJoinedQuests-box-container'>
                        <div className='Quests-renderJoinedQuests-top'>
                            <div className='Quests-renderJoinedQuests-top-left'>
                                <img src={twitterBird} className="Quests-TwitterBird" />
                            </div>
                            <div className='Quests-renderJoinedQuests-top-right'>
                                <h4 className='Quests-renderJoinedQuests-top-right-title'>Tweet Less !</h4>
                                <p className='Quests-renderJoinedQuests-top-right-text'>Focus on value, not quantity</p>
                            </div>

                        </div>

                        <div className='Quests-renderJoinedQuests-bottom'>
                            <div className='Quests-renderJoinedQuests-bottom-left'>

                                <p>Participe ❌</p>
                                <p>Actual Quest Gain</p>
                                <div className='Quests-renderAvailableQuests-left-bottom-stats-bg'>
                                    <b><p>30 Usdc</p></b>
                                </div> 
                                


                            </div>
                            <div className='Quests-renderJoinedQuests-bottom-right'>
                                <p>Waiting List ✅</p>
                                <p>Awaiting Balance</p>
                                <div className='Quests-renderAvailableQuests-left-bottom-stats-bg'>
                                    <b><p>{rjqActualUserBal} Usdc</p></b>
                                </div>



                            </div>

                        </div>

                        <div className='Quests-renderJoinedQuests-bottomButtons'>
                            <button onClick={() => handleUnscubscribeTwitterQuest()}>Unsubscribe</button>
                            <button onClick={() => setIsOpen(true)}>More Infos</button>
                        </div>
                        {isOpen && <TwitterQDetails setIsOpen={setIsOpen} />}

                    </div>
                ) : (
                    <div>No Quest Joined Yet</div>
                )}
            </>

        )
    }

    function renderAvailableQuests() {
        let isInWaitingList = stateAppData.inTwitterWaitingList;

        // let tqParticipants = stateAppData.twitterQuestParticipants;
        // let tqTotalStaked = stateAppData.twitterQuestBal;
        // let tqUserStaked = stateAppData.twitterUserBal;
        // let tqStartedAt = stateAppData.twitterCycleStart
        // let tqEndedAt = stateAppData.twitterCycleEnd

        let tqS = stateAppData.twitterDataSummary;

        let tqStartAt = tqS.cycleStartAt;
        let tqEndAt = tqS.cycleEndAt;
        let tqActualQuestBal = tqS.actualQuestBalance
        let tqActualParticipantsNumber = tqS.actualParticipantsNumber
        let tqEntryCost = stateAppData.twitterDataSummary.entryCost;
        console.log("tqActualQuestBal", tqActualQuestBal)

        return (
            <>
                {isInWaitingList ? (
                    <div className='Quests-renderAvailable-box-container'>
                        <h4>Push New Quest To The Community !</h4>
                        <p>By Sharing  Your Idea,</p>
                        <p>Act for Them !</p>
                        <button>[WIP]</button>
                    </div>
                ) : (
                    <div className='Quests-renderAvailableQuests-box-container'>

                        <div className='Quests-renderAvailableQuests-left'>
                            <div className='Quests-renderAvailableQuests-left-top'>

                                <div className='Quests-renderAvailableQuests-left-top-left'>
                                    <img src={twitterBird} className="Quests-TwitterBird" />
                                </div>

                                <div className='Quests-renderAvailableQuests-left-top-right'>
                                    <div className='Quests-renderAvailableQuests-left-top-right-title'>
                                        <h4 id='QRAQTRT'>Tweet Less !</h4>
                                        <div id='QRAQTRTR'><p>Registration Open</p></div>
                                    </div>
                                    <div className='Quests-renderAvailableQuests-left-top-right'>
                                        <p className='Quests-renderAvailableQuests-left-top-right-text'><b>Starts</b> {tqStartAt} {`->`} <b>End</b> {tqEndAt}</p>
                                        <p><b>Rule :</b> Tweet less than your 6 month weekly average for 4 consecutive week.</p>
                                    </div>
                                </div>
                            </div>

                            <div className='Quests-renderAvailableQuests-left-bottom'>

                                <div className='Quests-renderAvailableQuests-left-bottom-stats'>
                                    <b><p>Entry Cost</p></b>
                                    <div className='Quests-renderAvailableQuests-left-bottom-stats-bg'>
                                        <p><b>{tqEntryCost} Usdc</b></p>
                                    </div>
                                </div>
                                <div className='Quests-renderAvailableQuests-left-bottom-stats'>
                                    <b><p>Quest Gain</p></b>
                                    <div className='Quests-renderAvailableQuests-left-bottom-stats-bg'>
                                        <p><b>{tqActualQuestBal} Usdc</b></p>
                                    </div>

                                </div>
                                <div className='Quests-renderAvailableQuests-left-bottom-stats'>
                                    <b><p>Participants</p></b>
                                    <div className='Quests-renderAvailableQuests-left-bottom-stats-bg'>
                                        <p><b>{tqActualParticipantsNumber}</b></p>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className='Quests-renderAvailableQuests-right'>
                                {isConnected ? (<>
                                    <button className="QRAQB" onClick={() => handleJoinQuest()}>Join Quest</button>

                                </>) : (<>

                                </>)}
                                <button className="QRAQB" onClick={() => setIsOpen(true)}>More Infos</button>

                        </div>

                        {isOpen && <TwitterQDetails setIsOpen={setIsOpen} />}
                    </div>

                )}
            </>

        )
    }
    return (<>
        {isNotMember ? (<>
            <NftMinter />
        </>
        ) : (<>
            <div className='Quests-box-container noselect'>

                <div className="Quests-hero-container">
                    <div className="Quests-hero-left">
                        <p className='QuestsHero-text1'>Join quests and complete daily check-ins to earn $Less tokens, proving you have a sustainable daily life. Sometimes a challenge is all we need to pay a little extra attention to our behavior, so that it's aligned with what our planet can provide us with. Let's hold each other accountable.</p>
                        {/* <p className='QuestsHero-text2'>Sometimes a challenge is all we need to pay a little extra attention to our behavior, so that it's aligned with what our planet can provide us with. Let's hold each other accountable.</p> */}

                    </div>
                    <div className="Quests-hero-right">
                        <img src={QuestsDesign} alt="CommunityWork" className='QuestsHero-design' />
                    </div>

                </div>

                <div className="Quests-users-handle-container  Community-gridItemContainer3">
                    <div className='Quests-users-handle-bg'>
                        <h3>Quests Joined</h3>
                        <div className='Quests-users-handle-bg-quest'>
                            {isConnected ? (<>
                                {renderJoinedQuests()}
                            </>
                            ) : (<><p>Connect To Retrieve</p></>)}
                        </div>

                    </div>
                        <div className='Quests-users-handle-bg'>
                        <div className='Quests-users-handle-title'>
                            <h3>Check-ins</h3>
                                <b><p id="quhtbg">Coming Soon</p></b>
                                </div>

                            <div className='Quests-users-handle-bg-quest'>
                                <p>Earn <b>$Less</b> by completing repeatables</p>
                                <p>---------------</p>
                                <p>- Verify Your Twitter Account</p>
                                <p>- Onboard People To Do Less</p>
                                <p>- Take a Quizz</p>
                                <p>- participe / win a challenge</p>
                                {/* <button><a href="https://twitter.com/intent/tweet?screen_name=proofofless&ref_src=twsrc%5Etfw" class="twitter-mention-button" data-text="This is the beginning of my journey with Proof Of Less !" data-url="https://proof-of-less-front.vercel.app/app" data-related="proofofless" data-show-count="false">Tweet to @proofofless</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></button> */}
                                <a class="twitter-share-button"
                                    href="https://twitter.com/intent/tweet"
                                    data-size="large"
                                    data-text="This is the beginning of my journey with Proof Of Less !"
                                    data-url="https://proof-of-less-front.vercel.app/"
                                    data-hashtags="ProofOfLess"
                                    data-via="proofofless">
                                    Tweet
                                </a>

                        </div>

                    </div>
                </div>


                <div className="Quests-users-list-container  Community-gridItemContainer4">
                    <h3>Quests Available</h3>
                    <div className='Quests-users-handle-bg-quest'>
                        {/* {isConnected ? (<> */}
                        {renderAvailableQuests()}
                        {/* </>
                        ) : (<><p>Connect To Retrieve</p></>)} */}
                    </div>

                </div>

            </div>
        </>
        )
        }

    </>
    )
}

export default Quests;