import React from 'react';
import "../../../css/app/NftMinter.css"
import avatarDonut from "../../../assets/avatarDonut.png"

const NftMinter = () => {
    return (
        <div className='NftMinter-box-container noselect'>
            <div className='NftMinter-minter-container'>
                <img src={avatarDonut} alt='' />
                <h2>MemberShip Pass</h2>
                <p>This Nft will give you access to Proof Of Less Protocol</p>
                <p>Allowing you to access Quests and Dao !</p>
                <p>(Mint restricted ? Join the waiting list <a href="/app">here</a>) 📃</p>

                <button className='NftMinter-minter-button'>Mint</button>
            </div>
        </div>
    )
}

export default NftMinter;