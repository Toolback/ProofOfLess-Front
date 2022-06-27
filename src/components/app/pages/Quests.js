import React from 'react';

import QuestDesign from "../../../assets/QuestDesign.png"

const Quests = () => {
    return (
        <div className='community-gridContainer'>
        <div className="community-gridItemContainer  community-gridItemContainer1" />
        
        <div className="community-gridItemContainer  community-gridItemContainer2">
          <img src={QuestDesign} alt="CommunityWork" className='communityWork'/>
        </div>
  
        <div className="community-gridItemContainer  community-gridItemContainer3-buttons">
          <button className="cgbU">Users</button>
          <button className="cgbU">Friends</button>
        </div>
  
        <div className="community-gridItemContainer  community-gridItemContainer-title">
          <h3>All Users Statistics</h3>
        </div>
  
        <div className="community-gridItemContainer  community-gridItemContainer3">
        </div>
  
        <div className="community-gridItemContainer  community-gridItemContainer-title">
          <h3>List Of Users</h3>
        </div>
  
        <div className="community-gridItemContainer  community-gridItemContainer4">
        </div>
  
  
        <div className="community-gridItemContainer  community-gridItemContainer5" />
  
      </div>
  
    )
}

export default Quests;