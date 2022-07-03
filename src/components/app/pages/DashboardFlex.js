import "../../../css/app/DashboardFlex.css";
import { useContext, useState } from 'react'
import { AppDataStoreContext } from '../../../StoreAppData'

// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import avatarDonut from "../../../assets/avatarDonut.png"
import NftMinter from "./NftMinter"


const DashboardFlex = (props) => {
  const { stateAppData, dispatchAppData } = useContext(AppDataStoreContext)
  let userStatus = stateAppData.userStatus
  const isConnected = Boolean(userStatus !== 'connect to retrieve');
  const isNotMember = Boolean(userStatus == 'Connected')


  function renderUserProfil() {
    let uP = stateAppData.userProfil
    let uNP = stateAppData.userNftProfil;

    let userName = uP.userName;
    let email = uP.email;
    let userAddress = stateAppData.userAddress;
    let twitterUserName = uP.twitterUserName;
    let tokenId = uP.tokenId;
    let friendsAddress = uP.friendsAddress;

    let experience = uNP.experience;
    let questAccepted = uNP.questAccepted;
    let questCompleted = uNP.questCompleted;
    let daoProposalCreated = uNP.daoProposalCreated;
    let daoProposalCreatedAccepted = uNP.daoProposalCreatedAccepted;
    let daoProposalVoted = uNP.daoProposalVoted;
    let challengeReceived = uNP.challengeReceived;
    let friendChallenged = uNP.friendChallenged;

    console.log("DashBoard Retrieving", uP.email, stateAppData.userProfil)
    return (
      <>

        <div className="Dashboard-profil-Title">
          <h2>Profil</h2>
        </div>
        <div className="Dashboard-profil-container">



          <div className="Dashboard-profil-userProfil">
              <h3>Verified Accounts </h3>
              <div className="Dashboard-profil-userProfil-stats-container">

                <div className="Dashboard-profil-userProfil-stats-container-left">
                <p>Public Address : {userAddress}</p>
                <p>Name : {userName} 📝</p>
                  <p>Email : {email} 📝</p>
                  <p>Twitter : {twitterUserName} 📝</p>

                </div>
                <div className="Dashboard-profil-userProfil-stats-container-right">
                  <p>Twitter : Coming Soon ⏱</p>
                  <p>Youtube: Coming Soon ⏱</p>
                  <p>Instagram: Coming Soon ⏱</p>
                  <p>Phone Number : Coming Soon ⏱</p>

                </div>
              </div>
          </div>

          <div className="Dashboard-profil-userAvatar">
            <div className="Dashboard-profil-userAvatar-left">
              <p>Less Balance : 0</p>
              <p>Less To Next Rank : 100</p>
              <button>Upgrade (Coming Soon ⏱)</button>

            </div>
            
          <div className="Dashboard-profil-userAvatar-right">
            <img src={avatarDonut} alt="userAvatar" className="avatar-persona" />
              <p><b>Nft Rank Tier : 1</b></p>
              </div>
          </div>


          <div className="Dashboard-profil-InfosContainer-bottom">

            <div className="Dashboard-profil-InfosContainer-right">
              <h3>Nft Statistics</h3>
              <div className="Dashboard-profil-InfosContainer-right-bottom">

                <div className="Dashboard-profil-InfosContainer-right-bottom-left">
                  <p>Experience : level {experience}</p>
                  <p>Quest Accepted: {questAccepted}</p>
                  <p>Quest Completed: {questCompleted} </p>
                </div>
                <div className="Dashboard-profil-InfosContainer-right-bottom-right">
                  <p>Dao Proposal Created : {daoProposalCreated} </p>
                  <p>Dao Proposal Created Accepted: {daoProposalCreatedAccepted}</p>
                  <p>Dao Proposal Voted: {daoProposalVoted} </p>


                </div>
                <div className="Dashboard-profil-InfosContainer-right-bottom-right">
                  <p>Friend Challengend : {friendChallenged} </p>

                  <p>Challenge Received : {challengeReceived} </p>
                  <p>Challenge Completed : 0 </p>

                </div>
              </div>
            </div>
          </div>


        </div>







      </>
    )
  }


  return (<>
    {isNotMember ? (<> <NftMinter /> </>) : (
      <>
        <div className="Dashboard-box-container noselect">

          {isConnected ? (<> {renderUserProfil()} </>) : (<div className="ConnectToRetrieve-box-container">
            <p>Connect To Retrieve</p>
          </div>
          )}

        </div>
      </>
    )
    }
  </>


  )
}

export default DashboardFlex;