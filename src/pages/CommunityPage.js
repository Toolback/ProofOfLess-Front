import "../css/community/CommunityPage.css";
import { useContext } from 'react'

import { AppRouteStoreContext } from '../StoreAppRouter'

import CommunityContentManager from './CommunityContentManager'
import NavBar from "../components/community/components/NavBar"
const CommunityPage = () => {
    const { stateAppRoute } = useContext(AppRouteStoreContext);
    const { destination } = stateAppRoute; // Fetch from store

    const generateCommunityData = () => {
        switch (destination) {
            case 'initialize':
                return generateView(destination)

            case 'manifesto':
                return generateView(destination)

            case 'dao':
                return generateView(destination)

            default:
                break;
        }
    }

    const generateView = (destination) => {
        return <>
            <NavBar />
            <CommunityContentManager destination={destination} />
        </>

    }

    return (
        <>
            {generateCommunityData()}
        </>
    )
}

export default CommunityPage;