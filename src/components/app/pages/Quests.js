import React from 'react';
import "../../../css/app/Quests.css"
import QuestsDesign from "../../../assets/QuestIcon.png"

const Quests = () => {
    return (
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

                    </div>

                </div>
                <div className='Quests-users-handle-bg'>
                    <h3>Check-ins</h3>
                    <div className='Quests-users-handle-bg-quest'>

                    </div>

                </div>
            </div>


            <div className="Quests-users-list-container  Community-gridItemContainer4">
            <h3>Quests Available</h3>

            </div>

        </div>
    )
}

export default Quests;