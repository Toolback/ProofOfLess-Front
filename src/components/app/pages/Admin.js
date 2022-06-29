import { useState } from "react";
import IMemberShipInstance from '../../../utils/interfaces/IMemberShipInstance';

const Admin = () => {
    const [nftRole, setNftRole] = useState("minter");
    const [userAddress, setUserAddress] = useState("Enter User Addres");
    const [newQuestPeriod, setNewQuestPeriod] = useState(1);
    const [newPlayerStatus, setNewPlayerStatus] = useState(true);

    const handleGrantMembershipRole = async () => {
        let newRole;
        nftRole === "minter" ? newRole = await IMemberShipInstance.MINTER_ROLE() : await IMemberShipInstance.DEFAULT_ADMIN_ROLE();
        await IMemberShipInstance.grantRole(newRole, userAddress);
        let returnedRole = await IMemberShipInstance.hasRole(newRole, userAddress);
        // const data = await createUser(name, email, twitterUsername);
        console.log("CreateUserModal : handleCreateUser() data from db after createUser(): ")
        return returnedRole;
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
                <p>Subscribe Waiting List</p>
                <input type='text' onChange={e => setNewPlayerStatus(e.target.value)} value={""} />
                <button className='NftMinter-minter-button' onClick={() => handleGrantMembershipRole()}>Send</button>
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