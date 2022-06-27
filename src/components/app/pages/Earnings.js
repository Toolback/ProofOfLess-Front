import React from 'react';
import"../../../css/app/Earnings.css"
import EarningsDesign from "../../../assets/EarningsIcon.png"

const Earnings = () => {
  return (
    <div className='Earnings-box-container noselect'>

    <div className="Earnings-hero-design">
        <img src={EarningsDesign} alt="CommunityWork" className='EarningsHero' />
    </div>

    {/* <div className="Earnings-nav-buttons-container">
        <button className="EarningsNavButtons">Join</button>
        <button className="EarningsNavButtons">Create</button>
    </div> */}

    <div className="Earnings-Container-Title">
        <h3>WIP</h3>
    </div>

    <div className="Earnings-users-stats-container  Community-gridItemContainer3">
        <div className='Earnings-users-stats-bg'></div>
              <div className='Earnings-users-stats-bg'></div>
              <div className='Earnings-users-stats-bg'></div>
        <div className='Earnings-users-stats-bg'></div>
    </div>

    <div className="Earnings-Container-Title">
        <h3>Earnings Available</h3>
    </div>

    <div className="Earnings-users-list-container  Community-gridItemContainer4">
    </div>

</div>
  )
}

export default Earnings;