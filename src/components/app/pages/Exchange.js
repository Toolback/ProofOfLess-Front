import '../../../css/app/Exchange.css'

import {ethers} from 'ethers';

import { lightTheme, SwapWidget } from '@uniswap/widgets/dist/index.js'
import '@uniswap/widgets/dist/fonts.css'
import { getCProvider } from '../../../utils/functions/getCProvider';

// import { provider } from 'web3'

const jsonRpcEndPoint = "https://polygon-mumbai.g.alchemy.com/v2/pCiM9OJB_7EqE0lZ4Po19LqzoHkwlzVs"

const {provider} = getCProvider()

const AppExchange = () => {
  return (
    <div className='exchange-gridContainer'>
      <div className="Uniswap">
        <SwapWidget
          provider={provider}
          jsonRpcEndpoint={jsonRpcEndPoint}
          theme={lightTheme}
        />
      </div>
    </div>
  )
}

export default AppExchange;
