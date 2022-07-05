import { useContext, useEffect, useState, useCallback } from 'react'
import "../../../css/app/Quests.css"
import { AppDataStoreContext } from '../../../StoreAppData'

import QuestsDesign from "../../../assets/QuestIcon.png"
import ITwitterQuestInstance from '../../../utils/interfaces/ITwitterQuestInstance';
import NftMinter from "./NftMinter"
import twitterBird from "../../../assets/Twitter_Bird.svg"
import IFreeTokenInstance from '../../../utils/interfaces/IFreeTokenInstance';
import { RiInformationLine } from "react-icons/ri";

import TwitterQDetails from './TwitterQDetails'
const Quests = () => {
    const { stateAppData, dispatchAppData } = useContext(AppDataStoreContext)
    let userStatus = stateAppData.userStatus
    const isConnected = Boolean(userStatus !== 'connect to retrieve');
    const isNotMember = Boolean(userStatus == 'Connected')
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    let tqActualQuestBal = stateAppData.twitterQuestBal
    let tqActualUserBal = stateAppData.twitterUserBal


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

        // let signerInstance = ITwitterQuestInstance.getSigners();
        let res = await ITwitterQuestInstance.unregisterFromWaitingList(userIndex)
        let ress = await res
        let resTest = await ITwitterQuestInstance.waitingList(userAddress);
        let inTwitterWaitingList = false
        console.log("Quest Successfully Unscubscribed ! ", ress, res, resTest);
        await dispatchAppData({
            type: 'setAppData',
            ...stateAppData,
            inTwitterWaitingList // else userStatus ? or something else ?
        })
    }




    function renderJoinedQuests() {

        let isInWaitingList = stateAppData.inTwitterWaitingList;



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

                                <p>Participe : ❌</p>
                                <p>Actual Quest Gain :</p>
                                <p>{tqActualQuestBal} Usdc</p>

                            </div>
                            <div className='Quests-renderJoinedQuests-bottom-right'>
                                <p>Waiting List : ✅</p>
                                <p>Awaiting Balance :</p>
                                <p>{tqActualUserBal} Usdc</p>

                            </div>

                        </div>

                        <div className='Quests-renderJoinedQuests-bottomButtons'>
                            <button onClick={() => handleUnscubscribeTwitterQuest()}>Unsubscribe</button>
                            <button onClick={() => setIsOpen(true)}><RiInformationLine /></button>
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
        return (
            <>
                {isInWaitingList ? (
                    <div className='Quests-renderJoinedQuests-box-container'>
                        <h4>Push New Quest To The Community !</h4>
                        <p>By Sharing  Your Idea,</p>
                        <p>Act for Them !</p>
                        <button>[WIP]</button>
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
                            <div className='Quests-renderJoinedQuests-top-right'>
                                <p>Quest Gain :</p>
                                <p>{tqActualQuestBal} Usdc</p>
                            </div>
                            <div className='Quests-renderJoinedQuests-top-right'>
                                <p>Your Balance :</p>
                                <p>{tqActualUserBal} Usdc</p>
                            </div>
                            <div className='Quests-renderJoinedQuests-top-right'>

                                <button className="QRAQB" onClick={() => handleJoinQuest()}>Subscribe</button>
                                <button className="QRAQB" onClick={() => setIsOpen(true)}><RiInformationLine /></button>
                            </div>

                            {isOpen && <TwitterQDetails setIsOpen={setIsOpen} />}
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
                                    <p>[WIP] (Work In Progress)</p>
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