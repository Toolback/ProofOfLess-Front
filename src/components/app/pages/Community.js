import React from 'react';
import "../../../css/app/Community.css"
import CommunityIcon2 from "../../../assets/CommunityIcon.png"
import IMemberShipInstance from '../../../utils/interfaces/IMemberShipInstance';
const Community = () => {

    const retrieveMembersAddresses = async () => {
        const retrievedAddresses = await IMemberShipInstance.retrieveMembersAddress();
        console.log("MembersAddresses Retrieved : ", retrievedAddresses);
        return { retrievedAddresses };
    }

    return (
        <div className='appCommunity-box-container noselect'>

            <div className="appCommunity-hero-design">
                <img src={CommunityIcon2} alt="CommunityWork" className='appCommunityHero' />
            </div>

            <div className="appCommunity-nav-buttons-container">
                <button className="appCommunityNavButtons">Users</button>
                <button className="appCommunityNavButtons">Friends</button>
            </div>

            <div className="appCommunity-Container-Title">
                <h3>Global Statistics</h3>
            </div>

            <div className="appCommunity-users-stats-container  Community-gridItemContainer3">
                <div className='appCommunity-users-stats-bg'></div>
                <div className='appCommunity-users-stats-bg'></div>
                <div className='appCommunity-users-stats-bg'></div>
            </div>

            <div className="appCommunity-Container-Title">
                <h3>List Of Users</h3>
                {retrieveMembersAddresses()}
            </div>

            <div className="appCommunity-users-list-container  Community-gridItemContainer4">
            </div>

        </div>

    )
}

export default Community;