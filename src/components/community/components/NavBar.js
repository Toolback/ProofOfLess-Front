import "../../../css/community/NavBar.css"
import {useContext} from 'react'
import { AppRouteStoreContext } from '../../../StoreAppRouter'
import lessLogo from "../../../assets/LessLogo.png"

const NavBar = () => {
    const { dispatchAppRoute } = useContext(AppRouteStoreContext);
    // const { stateAppData } = useContext(AppDataStoreContext)

    const handleNavClick = (paramRoute) => {
        let dDataAppRoute = paramRoute;
        return dispatchAppRoute({ type: 'setAppRoute', dDataAppRoute })
      }
  
    return (
        <div className="NavBar-box-container noselect">
                <a href="/"><img className="NavBar-NavBar-LeftSide-Logo" src={lessLogo} alt=""/></a>

                <div className="NavBar-NavBar-ButtonsContainer">
                    <button className="NavBar-ButtonsNav" onClick={() => handleNavClick('initialize')}>Community</button>
                    <button className="NavBar-ButtonsNav" onClick={() => handleNavClick('manifesto')}>Manifesto</button>
                    <button className="NavBar-ButtonsNav" onClick={() => handleNavClick('dao')}>Dao</button>
                </div>
        </div>
    )

}
export default NavBar;