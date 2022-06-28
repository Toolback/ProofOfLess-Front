// switch to corresponding Layout for each case

// import MarketView from './GameViews/MarketView'
// import MapView from './GameViews/MapView'
import Dashboard from '../components/app/pages/DashboardFlex'
import Community from '../components/app/pages/Community'


import Quests from '../components/app/pages/Quests'
import Earnings from '../components/app/pages/Earnings'

import Dao from '../components/app/pages/Dao'
import Exchange from '../components/app/pages/Exchange'
import Admin from '../components/app/pages/Admin'
import NftMinter from '../components/app/pages/NftMinter'





const AppViewManager = ({ destination, data }) => {

  const generateViewGames = () => {
    switch (destination) {
      case 'initialize':
        return <Dashboard data={data} />
      
        case 'community':
          return <Community data={data} />

      case 'quests':
        return <Quests data={data} />
      
        case 'earnings':
          return <Earnings data={data} />

      case 'dao':
        return <Dao data={data} />

      case 'exchange':
        return <Exchange data={data} />

      case 'admin':
        return <Admin data={data} />
      
        case 'nftminter':
          return <NftMinter data={data} />


      default:
        break;


    }
  };

  return (
    (generateViewGames())

  )
}

export default AppViewManager;