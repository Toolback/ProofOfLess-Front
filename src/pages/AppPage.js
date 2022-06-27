import {useContext} from 'react'
import '../css/app/AppPage.css';

// import { AppDataStoreContext } from '../StoreAppData'
import {AppRouteStoreContext} from '../StoreAppRouter'

import LayoutTop from '../components/app/components/LayoutTop'
import LayoutLeft from '../components/app/components/LayoutLeft'

import AppContentManager from './AppContentManager'

const AppPage = () => {
  const { stateAppRoute } = useContext(AppRouteStoreContext);
  const {destination} = stateAppRoute; // Fetch from store

  // const {stateAppData, dispatchAppData} = useContext(AppDataStoreContext)
  // const {accounts} = stateAppData.accounts;
  // const {status} = stateAppData;
  // const {userAddress} = stateAppData;
  // const {userTokens} = stateAppData;
  // const {userBalance} = stateAppData;


  // const generateUserData = (userAddress) => {
  //   retrieveUserInformations(userAddress).then(res => {
  //     let dDataAppData = res.response.data.id; 
  //     dispatchAppData({ type: 'setAppData', dDataAppData}) })
  //   console.log('db response to front: User infos', stateAppData)
  // }

  const generateDataGames = () => {
    switch (destination) {
      case 'initialize':
        return generateView(destination)

        case 'community':
          return generateView(destination)
      
        case 'quests':
        return generateView(destination)
      
        case 'earnings':
          return generateView(destination)

      case 'dao':
        return generateView(destination)

      case 'exchange':
        return generateView(destination)

      case 'admin':
        return generateView(destination)
    
      default:
        break;
    }
  };

  const generateView = (destination) => {
    // console.log('- generateView : destination + StateAppData ', destination, stateAppData + '+ accounts', accounts)

    return <>
      {/* <div className='AppPage-TopNav'><LayoutTop destination={destination} /></div>  */}
      <div className='AppPage-box-container'>

      <div className='AppPage-LeftNav'><LayoutLeft destination={destination} /> </div>

        <div className='AppPage-Content'><AppContentManager destination={destination} /></div>
        </div>
      </>
      
  }

  return (
    <>
    {generateDataGames()}
  
    </>
    
  )
};

export default AppPage;