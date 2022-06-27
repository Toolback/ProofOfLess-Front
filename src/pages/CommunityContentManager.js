import Community from '../components/community/pages/Community'
import Manifesto from '../components/community/pages/Manifesto'
import Dao from '../components/community/pages/Dao'



const AppViewManager = ({ destination, data }) => {

    const generateViewGames = () => {
        switch (destination) {
            case 'initialize':
                return <Community data={data} />

            case 'manifesto':
                return <Manifesto data={data} />

            case 'dao':
                return <Dao data={data} />

            default:
                break;


        }
    };

    return (
        (generateViewGames())

    )
}

export default AppViewManager;