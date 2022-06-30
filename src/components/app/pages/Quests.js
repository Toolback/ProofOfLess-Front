import { useContext, useState } from 'react'
import "../../../css/app/Quests.css"
import { AppDataStoreContext } from '../../../StoreAppData'

import QuestsDesign from "../../../assets/QuestIcon.png"
import ITwitterQuestInstance from '../../../utils/interfaces/ITwitterQuestInstance';
import NftMinter from "./NftMinter"
const Quests = () => {
    const { stateAppData, dispatchAppData } = useContext(AppDataStoreContext)
    let userStatus = stateAppData.userStatus
    const isConnected = Boolean(userStatus !== 'connect to retrieve');
    const isNotMember = Boolean(userStatus == 'Connected')

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
        return (
            <>
                {isInWaitingList ? (
                    <div className='Quests-renderJoinedQuests-box-container'>
                        <h4>Twitter Quest</h4>
                        <p>Date :</p>
                        <p>Total Participants :</p>
                        <button>Unsubscribe</button>
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
                        <button>New Quest</button>
                    </div>
                ) : (
                    <div className='Quests-renderJoinedQuests-box-container'>

                        <h4>Twitter Quest</h4>
                        <button onClick={() => handleJoinQuest()}>Join Quest</button>
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