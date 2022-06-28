import '../../../css/app/LayoutLeft.css'
import { useContext } from 'react'

import { AppRouteStoreContext } from '../../../StoreAppRouter'
import { AppDataStoreContext } from '../../../StoreAppData'

// import dashboardIcon from "../../../assets/DashboardIcon.png"

// Display differents scenes 

const AppLayoutLeft = (props) => {
  const { dispatchAppRoute } = useContext(AppRouteStoreContext);
  const { stateAppData } = useContext(AppDataStoreContext)

  const isAdmin = stateAppData.userAddress === toString('0x12EC67660ebbb6dFf62378087FC69384D048b838') ? true : false


  const handleNavClick = (paramRoute) => {
    let dDataAppRoute = paramRoute;
    return dispatchAppRoute({ type: 'setAppRoute', dDataAppRoute })
  }
  // Mayb rerender with useEffect after connexion to retrieve correct data ? 
  // console.log(" - AppLayoutLeft : User Address after Connexion : ", isAdmin, stateAppData.userAddress)

  return (
    <div className="LayoutLeft-box-container noselect">


      <div className="LayoutLeft-main-box">

        <div className="GameNavButton" onClick={() => handleNavClick('initialize')}>Dashboard</div>
        <div className="GameNavButton" onClick={() => handleNavClick('community')}>Community</div>
        <div className="GameNavButton" onClick={() => handleNavClick('quests')}>Quests</div>
        <div className="GameNavButton" onClick={() => handleNavClick('earnings')}>Earnings</div>

        <div className="GameNavButton">Dao</div>
        <div className="GameNavButton" onClick={() => handleNavClick('exchange')}>Exchange</div>
        {isAdmin ? (
          <div className='GameNavButton' onClick={() => handleNavClick('admin')}>(Admin)</div>
        ) : (
          <div className='GameNavButton' onClick={() => handleNavClick('admin')}>(NotAdmin)</div>
        )}
        <div className="GameNavButton" onClick={() => handleNavClick('nftminter')}>(Nft Minter Page)</div>

        </div>


      <div className="LayoutLeft-bottom-box">
        <p className="LayoutLeft-DocsButtons">Docs</p>
        <p className="LayoutLeft-DocsButtons">Help</p>
        <p className="LayoutLeft-DocsButtons">Annoucements</p>
        <a href="/"><p className="LayoutLeft-DocsButtons">Home</p></a>
      </div>
    </div>
  )
};
export default AppLayoutLeft;