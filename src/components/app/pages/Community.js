import { useState, useEffect, useCallback, useContext } from "react";
import "../../../css/app/Community.css"
import CommunityIcon2 from "../../../assets/CommunityIcon.png"
import IMemberShipInstance from '../../../utils/interfaces/IMemberShipInstance';
import { AppDataStoreContext } from '../../../StoreAppData'

// import MemberList from "../components/MemberList";

// import Pagination from "../components/Pagination";

import { RiCloseLine } from "react-icons/ri";
import { RiUserAddLine } from "react-icons/ri";
import ITwitterQuestInstance from "../../../utils/interfaces/ITwitterQuestInstance";

// let PageSize = 10; Scop ?

const Community = () => {
    const [initialMembers, setInitialMembers] = useState([[]]);

    const { stateAppData, dispatchAppData } = useContext(AppDataStoreContext);
    const [isMemberList, setIsMemberList] = useState(true);


    const retrieveMembersInfos = useCallback(async () => {
        console.log("Community : retrieveMembersInfos() Starting: ", stateAppData.listMembersAddress, initialMembers)

        let resMembersAddress = await IMemberShipInstance.retrieveMembersAddress();
        let listMembersAddress = await resMembersAddress

        const res = await IMemberShipInstance.retrieveMembersInfos(listMembersAddress);
        console.log("Community : retrieveMembersInfos() While: ", res)


        setInitialMembers(res)
        await dispatchAppData(
            {

                type: 'setAppData',
                ...stateAppData,
                listMembersAddress,

            }
        )

    })
    // console.log("Community : retrieveMembersInfos() WhileEnd: ", initialMembers)

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

    const handleAddFriends = async (friendAddress) => {
        let req = await IMemberShipInstance.addUserFriend(stateAppData.userAddress, friendAddress)
        console.log("Friend Added ! ", req)
    }



    function renderMembers() {
        // console.log("RenderMembers()", initialMembers)
        // const [currentPage, setCurrentPage] = useState(1);
        // let PageSize = 10;

        // const currentTableData = useMemo(() => {
        //     const firstPageIndex = (currentPage - 1) * PageSize;
        //     const lastPageIndex = firstPageIndex + PageSize;
        //     return initialMembers.slice(firstPageIndex, lastPageIndex);
        // }, [currentPage]);


        async function isFriendWith(friendAddress) {
            let req = await IMemberShipInstance.findUserFriendIndex(stateAppData.userAddress, friendAddress)
            let res = parseInt(req.toString())
            console.log("Friend Index is ", res)

            if (res != -1) {
                return true
            } else {
                return false
            }
        }

        return (
            <>
                <table>
                    <thead>
                        <tr>
                            <th>UserAddress</th>
                            <th>UserName</th>
                            {/* <th>TokenId</th> */}
                            <th>Twitter UserName</th>
                            <th>Add Friend</th>

                        </tr>
                    </thead>
                    <tbody>
                        {initialMembers.map(item => {

                            //   let tokenId = item.tokenId.toString()
                            return (
                                <tr>
                                    <td>{item.userAddress}</td>
                                    <td>{item.userName}</td>
                                    {/* <td>{tokenId}</td> */}
                                    <td>{item.twitterUserName}</td>
                                    <td><button onClick={() => { handleAddFriends(item.userAddress) }}><RiUserAddLine /></button></td>
                                    {/* {isFriendWith(item.userAddress) ? (<></>) : (<></>)} */}

                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                {/* <Pagination
                    className="pagination-bar"
                    currentPage={currentPage}
                    totalCount={initialMembers.length}
                    pageSize={PageSize}
                    onPageChange={page => setCurrentPage(page)}
                /> */}
            </>
        );
    }

    function renderFriends() {
        let friendsAddress = stateAppData.userProfil
        console.log("initialMembers friends",friendsAddress, initialMembers[0].userAddress)

        return (
            <>
                <table>
                    <thead>
                        <tr>
                            <th>UserAddress</th>
                            <th>UserName</th>
                            {/* <th>TokenId</th> */}
                            <th>Twitter UserName</th>
                            <th>Remove Friend</th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* {initialMembers.map(item => {

                            return (
                                <tr>
                                    <td>{item.userAddress}</td>
                                    <td>{item.userName}</td>
                                    <td>{item.twitterUserName}</td>
                                    <td><button><RiCloseLine/></button></td>
 
                                </tr>
                            );
                        })} */}
                    </tbody>
                </table>
                {/* <Pagination
                    className="pagination-bar"
                    currentPage={currentPage}
                    totalCount={initialMembers.length}
                    pageSize={PageSize}
                    onPageChange={page => setCurrentPage(page)}
                /> */}
            </>
        );
    }




    return (
        <div className='appCommunity-box-container noselect'>

            <div className="appCommunity-hero-design">
                <img src={CommunityIcon2} alt="CommunityWork" className='appCommunityHero' />
            </div>

            <div className="appCommunity-nav-buttons-container">
                <button className="appCommunityNavButtons" onClick={() => setIsMemberList(true)}>Users</button>
                <button className="appCommunityNavButtons" onClick={() => setIsMemberList(false)}>Friends</button>
            </div>

            {/* <div className="appCommunity-Container-Title">
                <h3>Global Statistics</h3>
            </div>

            <div className="appCommunity-users-stats-container  Community-gridItemContainer3">
                <div className='appCommunity-users-stats-bg'>
                    <h5>Total Members</h5>
                    {initialMembers.length}
                </div>
                <div className='appCommunity-users-stats-bg'></div>
                <div className='appCommunity-users-stats-bg'></div>
            </div> */}


            {isMemberList ? (<>
                <div className="appCommunity-Container-Title">
                <h3>List Of Users</h3>

            </div>
                <div className="appCommunity-users-list-container  Community-gridItemContainer4">
                    {renderMembers()}
                </div>
            </>) : (<>
                <div className="appCommunity-Container-Title">
                        <h3>List Of Friends</h3>
                        <h5>[/!\ WIP]</h5>

            </div>
                <div className="appCommunity-users-list-container  Community-gridItemContainer4">
                    {renderFriends()}
                </div>
            </>)}




        </div>


    )
}

export default Community;