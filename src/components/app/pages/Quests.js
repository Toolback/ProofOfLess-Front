import { useContext, useEffect, useState, useCallback } from 'react'
import "../../../css/app/Quests.css"
import { AppDataStoreContext } from '../../../StoreAppData'

import QuestsDesign from "../../../assets/QuestIcon.png"
import ITwitterQuestInstance from '../../../utils/interfaces/ITwitterQuestInstance';
import NftMinter from "./NftMinter"
import twitterBird from "../../../assets/Twitter_Bird.svg"
const Quests = () => {
    const { stateAppData, dispatchAppData } = useContext(AppDataStoreContext)
    let userStatus = stateAppData.userStatus
    const isConnected = Boolean(userStatus !== 'connect to retrieve');
    const isNotMember = Boolean(userStatus == 'Connected')

    const retrieveMembersInfos = useCallback(async () => { 
        let twitterDataSummary = {}
        let req = {}
        req = await ITwitterQuestInstance.getQuestSummarize();
        twitterDataSummary.lessTokenAddress = await req.lessTokenAddress;
        twitterDataSummary.memberShipTokenAddress = await req.memberShipTokenAddress;
        twitterDataSummary.entryToken = parseInt(await req.entryToken.toString());
        twitterDataSummary.entryCost = parseInt(await req.entryCost.toString());
        twitterDataSummary.amountLessReward = parseInt(await req.amountLessReward.toString());
        twitterDataSummary.actualFees = parseInt(await req.actualFees.toString());
        twitterDataSummary.actualQuestBalance = parseInt(await req.actualQuestBalance.toString());
        twitterDataSummary.durationPeriod = new Date(await req.durationPeriod * 1000);
        twitterDataSummary.cycleStartAt = new Date(await req.cycleStartAt * 1000);
        twitterDataSummary.cycleEndAt = new Date(await req.cycleEndAt * 1000);
        twitterDataSummary.actualQuestParticipants = await req.actualQuestParticipants;
        // console.log("Quests Infos Retrieved :", twitterDataSummary)

        await dispatchAppData({
            type: 'setAppData',
            ...stateAppData,
            twitterDataSummary
        })

    })

    useEffect(() => {
        retrieveMembersInfos()
    }, [])
    // console.log("Quests Infos Retrieved Ad:", stateAppData.twitterDataSummary)

    async function handleJoinQuest() {
        let userAddress = stateAppData.userAddress
        console.log("UserAddress ! ", userAddress);

        // let signerInstance = ITwitterQuestInstance.getSigners();
        let res = await ITwitterQuestInstance.registerToWaitingList()
        console.log("UserAddress ! ", stateAppData.userAddress);
        let ress = await res

        let res2 = await ITwitterQuestInstance.waitingList(stateAppData.userAddress)
        console.log("Quest Joinded ! ", ress, res2);
    }

    

    function renderJoinedQuests() {
        let isInWaitingList = stateAppData.inTwitterWaitingList;
        let twitterQuestSummary = {}
        twitterQuestSummary = stateAppData.twitterDataSummary
        // let startDate = twitterQuestSummary.actualFees
        // console.log("EUUYH", twitterQuestSummary)
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

                                {/* <p>Start : { startDate }</p> */}
                                <p>End : 1/08/2022</p>
                                <p>Total Pool Gain :</p>
                                <p>1290 Dai</p>

                            </div>
                            <div className='Quests-renderJoinedQuests-bottom-right'>
                                <p>Total Participants : 129</p>
                                <p>Total Waiting List : 146</p>
                                <p>Participe : ❌</p>
                                <p>Waiting List : ✔</p>

                            </div>

                        </div>

                        <div className='Quests-renderJoinedQuests-bottomButtons'>
                            <button>(Unsubscribe)</button>
                            <button>(Supply / Withdraw)</button>
                        </div>


                    </div>
                ) : (
                    <div>No Quest Joined Yet</div>
                )}
            </>

        )
    }

    function renderAvailableQuests() {
        let isInWaitingList = stateAppData.inTwitterWaitingList;
        return (
            <>
                {isInWaitingList ? (
                    <div className='Quests-renderJoinedQuests-box-container'>
                        <h4>Push New Quest To The Community !</h4>
                        <p>By Submitting Your Idea,</p>
                        <p>Act for your ideas !</p>
                        <button>Coming Soon</button>
                    </div>
                ) : (
                    <div className='Quests-renderJoinedQuests-box-container'>

                        <div className='Quests-renderJoinedQuests-top'>
                            <div className='Quests-renderJoinedQuests-top-left'>
                                <img src={twitterBird} className="Quests-TwitterBird" />
                            </div>
                            <div className='Quests-renderJoinedQuests-top-right'>
                                <h4 className='Quests-renderJoinedQuests-top-right-title'>Tweet Less !</h4>
                                <p className='Quests-renderJoinedQuests-top-right-text'>Focus on value, not quantity</p>
                            </div>
                            <button className="QRAQB" onClick={() => handleJoinQuest()}>Join Quest</button>
                            <button className="QRAQB">(Supply / Withdraw)</button>

                        </div>
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
                        <h3>Check-ins</h3>

                        <div className='Quests-users-handle-bg-quest'>
                            {isConnected ? (<>
                                <p>Coming Soon ... !</p>
                            </>
                            ) : (<><p>Connect To Retrieve</p></>)}
                        </div>

                    </div>
                </div>


                <div className="Quests-users-list-container  Community-gridItemContainer4">
                    <h3>Quests Available</h3>
                    <div className='Quests-users-handle-bg-quest'>
                        {isConnected ? (<>
                            {renderAvailableQuests()}
                        </>
                        ) : (<><p>Connect To Retrieve</p></>)}
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