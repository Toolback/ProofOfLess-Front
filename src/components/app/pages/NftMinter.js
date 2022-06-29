import { useContext, useState } from "react";
import { AppDataStoreContext } from '../../../StoreAppData'

import "../../../css/app/NftMinter.css"
import avatarDonut from "../../../assets/avatarDonut.png"

// import { createUser } from '../../../utils/functions/app/createUser'
import IMemberShipInstance from '../../../utils/interfaces/IMemberShipInstance';

const NftMinter = () => {
    const { stateAppData, dispatchAppData } = useContext(AppDataStoreContext)

    const [userName, setUserName] = useState("Enter Name");
    const [userEmail, setUserEmail] = useState("Enter Email");
    const [twitterUserName, setTwitterUsername] = useState("Enter Twitter UserName");
    const [isMember, setIsMember] = useState(false);
    const handleCreateNewMember = async () => {
        const data = await IMemberShipInstance.safeMint(stateAppData.userAddress, userName, userEmail, twitterUserName);
        console.log("CreateUserModal : handleCreateUser() data from db after createUser(): ", data)
        setIsMember(true);
        await dispatchAppData(
            {
                type: 'setAppData',
                userName,
                userEmail,
                twitterUserName,
                isMember

            })
    }
    return (
        <div className='NftMinter-box-container noselect'>
            <div className='NftMinter-minter-container'>
                <img className="NftMinter-minter-nft" src={avatarDonut} alt='' />
                <h2>MemberShip Pass</h2>
                <p>This Nft will give you access to Proof Of Less Protocol</p>
                <p>Allowing you to access Quests and Dao !</p>
                {stateAppData.isMember ? (
                    <p>Welcome Onboard ! ✅</p>
                ) : (<>
                    <p>(Mint restricted ? Join the waiting list <a href="/app">here</a>📝) </p>
                    <div className="NftMinter-minter-inputs">
                    <input type='text' onChange={e => setUserName(e.target.value)} value={userName} />
                    <input type='text' onChange={e => setUserEmail(e.target.value)} value={userEmail} />
                    <input type='text' onChange={e => setTwitterUsername(e.target.value)} value={twitterUserName} />
                </div>
                    <button className='NftMinter-minter-button' onClick={() => handleCreateNewMember()}>Mint</button>
                    </>
                )}
            </div>
        </div>
    )
}

export default NftMinter;