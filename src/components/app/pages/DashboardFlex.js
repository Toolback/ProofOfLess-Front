import "../../../css/app/DashboardFlex.css";
import { useContext, useState } from 'react'
import { AppDataStoreContext } from '../../../StoreAppData'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import avatarDonut from "../../../assets/avatarDonut.png"
import NftMinter from "./NftMinter"


const DashboardFlex = (props) => {
  const { stateAppData, dispatchAppData } = useContext(AppDataStoreContext)
  let userStatus = stateAppData.userStatus
  const isConnected = Boolean(userStatus !== 'connect to retrieve');
  const isNotMember = Boolean(userStatus == 'Connected')

  const data = [
    {
      name: 'Monday',
      Total: 18
    },
    {
      name: "Tuesday ",
      Total: 13,
    },
    {
      name: "Wednesday ",
      Total: 9,
    },
    {
      name: "Thursday ",
      Total: 12,
    },
    {
      name: "Friday ",
      Total: 10,
    },
    {
      name: "Saturday  ",
      Total: 2,
    },
    {
      name: "Sunday  ",
      Total: 4,
    },
  ];

  return (<>
    {isNotMember ? (<>
      <NftMinter />
    </>
    ) : (<>
      <div className="Dashboard-box-container noselect">

        {isConnected ? (<>

          <div className="Dashboard-profil-container Dashboard-MultiBoxContainer">
            <div className="Dashboard-profil-Title">
              <h2>Profil</h2>
              </div>
              <div className="Dashboard-profil-InfosContainer-right-top">
              <img src={avatarDonut} alt="userAvatar" className="avatar-persona" />
              </div>
            <div className="Dashboard-profil-InfosContainer-top">

              <div className="Dashboard-profil-InfosContainer-left-top">
              <h3>Verified Accounts </h3>
                  <div className="Dashboard-profil-InfosContainer-left-bottom">

                    <div className="Dashboard-profil-InfosContainer-left-bottom-left">
                      <p>Name : DevleDev</p>
                      <p>Email : Enter Email Here 📝</p>
                      <p>Public Address : 0xDev</p>
                      <p>Twitter : @DevleDev ✅</p>

                    </div>
                    <div className="Dashboard-profil-InfosContainer-left-bottom-right">
                      <p>Twitter : Coming Soon ⏱</p>
                      <p>Youtube: Coming Soon ⏱</p>
                      <p>Instagram: Coming Soon ⏱</p>
                      <p>Phone Number : Coming Soon ⏱</p>

                    </div>
                  </div>              </div>

            </div>


            <div className="Dashboard-profil-InfosContainer-bottom">

              <div className="Dashboard-profil-InfosContainer-right">
                <h3>Nft Statistics</h3>
                <div className="Dashboard-profil-InfosContainer-right-bottom">

                  <div className="Dashboard-profil-InfosContainer-right-bottom-left">
                    <p>Experience : level 10</p>
                    <p>Quest Accepted: 56</p>
                    <p>Quest Completed: 32 </p>
                  </div>
                  <div className="Dashboard-profil-InfosContainer-right-bottom-right">
                    <p>Dao Proposal Created : 3 </p>
                    <p>Dao Proposal Created Accepted: 1</p>
                    <p>Dao Proposal Voted: 102 </p>


                  </div>
                  <div className="Dashboard-profil-InfosContainer-right-bottom-right">
                    <p>Friend Challengend : 2 </p>

                    <p>Challenge Received : 12 </p>
                    <p>Challenge Completed : 8 </p>

                  </div>
                </div>
              </div>
            </div>


          </div>







        </>
        ) : (<div className="ConnectToRetrieve-box-container">
          <p>Connect To Retrieve</p>
        </div>
        )}

      </div>
    </>)}</>


  )
}

export default DashboardFlex;