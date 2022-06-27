import React from 'react';
import"../../../css/app/Quests.css"
import QuestsDesign from "../../../assets/QuestDesign.png"

const Quests = () => {
  return (
    <div className='Quests-box-container noselect'>

    <div className="Quests-hero-design">
        <img src={QuestsDesign} alt="CommunityWork" className='QuestsHero' />
    </div>

    <div className="Quests-nav-buttons-container">
        <button className="QuestsNavButtons">Join</button>
        <button className="QuestsNavButtons">Create</button>
    </div>

    <div className="Quests-Container-Title">
        <h3>Quests Joined Details</h3>
    </div>

    <div className="Quests-users-stats-container  Community-gridItemContainer3">
        <div className='Quests-users-stats-bg'></div>
        <div className='Quests-users-stats-bg'></div>
    </div>

    <div className="Quests-Container-Title">
        <h3>Quests Available</h3>
    </div>

    <div className="Quests-users-list-container  Community-gridItemContainer4">
    </div>

</div>
  )
}

export default Quests;