import { useState, useEffect, useCallback, useContext } from "react";
import "../../../css/app/Community.css"
import CommunityIcon2 from "../../../assets/CommunityIcon.png"
import IMemberShipInstance from '../../../utils/interfaces/IMemberShipInstance';
import { AppDataStoreContext } from '../../../StoreAppData'

// import MemberList from "../components/MemberList";
import { Card } from "semantic-ui-react";
// import 'semantic-ui-css/semantic.min.css'

const Community = () => {
    const [initialMembers, setInitialMembers] = useState([[]]);
    const { stateAppData, dispatchAppData } = useContext(AppDataStoreContext);

    const retrieveMembersInfos = useCallback(async () => {
        console.log("Community : retrieveMembersInfos() Starting: ", stateAppData.listMembersAddress, initialMembers)

        let resMembersAddress = await IMemberShipInstance.retrieveMembersAddress();
        let listMembersAddress = await resMembersAddress

        const res = await IMemberShipInstance.retrieveMembersInfos(listMembersAddress);
        console.log("Community : retrieveMembersInfos() While: ", res)
        // let members = {
        //     userAddress : res.userAddress,
        //     userName : res.userName,
        //     userEmail: res.email,
        //     twitterUserName: res.twitterUserName,
        //     friendsAddress: res.friendsAddress
        // }

        setInitialMembers(res)
        await dispatchAppData(
            {
                type: 'setAppData',
                listMembersAddress,

            }
        )
    })
    console.log("Community : retrieveMembersInfos() WhileEnd: ", initialMembers)

    // const retrieveMembersInfos = async (req) => {
    //     for (let i = 0; i < req.length; i++) {
    //         let res = await IMemberShipInstance.retrieveMembersInfos(req[i]);

    //     }
    // }

    useEffect(() => {
        //    const fetchMembers = async() => {
        //        let res = await IMemberShipInstance.retrieveMembersAddress();
        //        let members = await res;
        //        setInitialMembers(members)
        //        console.log("useEffectSetting", initialMembers)

        //     }
        //     fetchMembers()
        //         .catch(console.error);


        retrieveMembersInfos()
            .catch(console.error);
    }, []);

    function renderMembers() {
        console.log("RenderMembers()", initialMembers)
        const items = initialMembers.map((userAddress, userName) => {
            // let userInfos = await IMemberShipInstance.
            return {
                header: userAddress[0],
                description: userAddress[1],
            };
        });
        console.log("renderMembers(): items :", items)
        return <Card.Group items={items} />;
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

            {/* <div className="appCommunity-Container-Title">
                <h3>Global Statistics</h3>
            </div> */}

            {/* <div className="appCommunity-users-stats-container  Community-gridItemContainer3">
                <div className='appCommunity-users-stats-bg'>
                    <h5>Total Members</h5>
                    {initialMembers.length}
                </div>
                <div className='appCommunity-users-stats-bg'></div>
                <div className='appCommunity-users-stats-bg'></div>
            </div> */}
            <div className="appCommunity-Container-Title">
                <h3>List Of Users</h3>

            </div>

            <div className="appCommunity-users-list-container  Community-gridItemContainer4">
                {renderMembers()}

            </div>

        </div>

    )
}

export default Community;