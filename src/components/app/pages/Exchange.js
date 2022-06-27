import '../../../css/app/Exchange.css'

import {ethers} from 'ethers';

import { darkTheme, lightTheme, SwapWidget } from '@uniswap/widgets/dist/index.js'
import '@uniswap/widgets/dist/fonts.css'

// import { provider } from 'web3'

const jsonRpcEndPoint = process.env.REACT_APP_MATIC_API_KEY

const provider = new ethers.providers.Web3Provider(window.ethereum);

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
