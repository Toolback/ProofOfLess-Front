import { useState } from "react";
import IMemberShipInstance from '../../../utils/interfaces/IMemberShipInstance';
import ITwitterQuestInstance from "../../../utils/interfaces/ITwitterQuestInstance";

const Admin = () => {
    const [nftRole, setNftRole] = useState("minter");
    const [userAddress, setUserAddress] = useState("Enter User Addres");
    const [newQuestPeriod, setNewQuestPeriod] = useState(1);
    const [newPlayerStatus, setNewPlayerStatus] = useState(true);


    const [tqEntryCost, setTqEntryCost] = useState(0)
    const [tqFees, setTqFees] = useState(0)
    const [tqDelayPeriod, setTqDelayPeriod] = useState(0)
    const [tqToken, setTqToken] = useState("TokenEntryAddress: 0x9aa7fEc87CA69695Dd1f879567CcF49F3ba417E2")
    const [tqMemberShipAddress, setTqMemberShipAddress] = useState("MemberShip Contract Address")
    const [tqLessAddress, setTqLessAddress] = useState("Les Contract Address")

    const handleGrantMembershipRole = async () => {
        let newRole;
        nftRole === "minter" ? newRole = await IMemberShipInstance.MINTER_ROLE() : await IMemberShipInstance.DEFAULT_ADMIN_ROLE();
        await IMemberShipInstance.grantRole(newRole, userAddress);
        let returnedRole = await IMemberShipInstance.hasRole(newRole, userAddress);
        // const data = await createUser(name, email, twitterUsername);
        console.log("CreateUserModal : handleCreateUser() data from db after createUser(): ")
        return returnedRole;
    }

    const handleSubscribeWaitingList = async () => {

        let req = await ITwitterQuestInstance.lockEntryFunds(
            ["0x12EC67660ebbb6dFf62378087FC69384D048b838"],
            [0],
            [1],
            [1e6],
            [9],
            ["0x9aa7fEc87CA69695Dd1f879567CcF49F3ba417E2"]
        );
        // const data = await createUser(name, email, twitterUsername);
        console.log("CreateUserModal : handleCreateUser() data from db after createUser(): ", req)
    }

    async function handleInitTwitterQuest() {
        let res = await ITwitterQuestInstance.initialize(tqEntryCost, tqFees, tqDelayPeriod, tqToken, tqMemberShipAddress, tqLessAddress);
        console.log("Twitter Quest Init Successfully ! : ", res)
    }
    return (
        <div className="Community-box-container">
            <div className="Admin-MemberShipRole">
                <p>Grant MemberShip Role</p>
                <input type='text' onChange={e => setNftRole(e.target.value)} value={nftRole} />
                <input type='text' onChange={e => setUserAddress(e.target.value)} value={userAddress} />
                <button className='NftMinter-minter-button' onClick={() => handleGrantMembershipRole()}>Send</button>

            </div>

            <div className="Admin-MemberShipRole">
                <p>End Quest Period</p>
                <input type='text' onChange={e => setNewQuestPeriod(e.target.value)} value={newQuestPeriod} />
                <button className='NftMinter-minter-button' onClick={() => handleGrantMembershipRole()}>Send</button>
            </div>

            <div className="Admin-MemberShipRole">
                <p>Update Player Status</p>
                <input type='text' onChange={e => setNewPlayerStatus(e.target.value)} value={newPlayerStatus} />
                <button className='NftMinter-minter-button' onClick={() => handleGrantMembershipRole()}>Send</button>
            </div>
            
            <div className="Admin-MemberShipRole">
                <p>Initialize Twitter Quest Contract</p>
                <input type='text' onChange={e => setTqEntryCost(e.target.value)} value={tqEntryCost} />
                <input type='text' onChange={e => setTqFees(e.target.value)} value={tqFees} />
                <input type='text' onChange={e => setTqDelayPeriod(e.target.value)} value={tqDelayPeriod} />
                <input type='text' onChange={e => setTqToken(e.target.value)} value={tqToken} />
                <input type='text' onChange={e => setTqMemberShipAddress(e.target.value)} value={tqMemberShipAddress} />
                <input type='text' onChange={e => setTqLessAddress(e.target.value)} value={tqLessAddress} />

                <button className='NftMinter-minter-button' onClick={() => handleInitTwitterQuest()}>Send</button>
            </div>

            <div className="Admin-MemberShipRole">
                <p>Subscribe Waiting List</p>
                <input type='text' onChange={e => setNewPlayerStatus(e.target.value)} value={""} />
                <button className='NftMinter-minter-button' onClick={() => handleSubscribeWaitingList()}>Send</button>
            </div>

            <div className="Admin-MemberShipRole">
                <p>Initiate New Quest Cycle</p>
                <input type='text' onChange={e => setNewPlayerStatus(e.target.value)} value={"[]"} />
                <button className='NftMinter-minter-button' onClick={() => handleGrantMembershipRole()}>Send</button>
            </div>
        </div>
    )
}

export default Admin;