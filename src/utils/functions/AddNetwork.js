import { ethers } from "ethers";


export const AddNetwork = async () => {

    const provider = window.ethereum;
    const PolygonMumbaiChainId = '0x13881';

    const chainId = await provider.request({ method: 'eth_chainId' });
    console.log("WHATSCURRENTCHAINID", chainId)

    if (chainId === PolygonMumbaiChainId) {

        console.log("Bravo!, you are on the correct network");
    } else {

        console.log("oulalal, switch to the correct network");
        try {

            await provider.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: PolygonMumbaiChainId }],
            });
            console.log("You have succefully switched to Binance Test network")
            window.location.reload(false)
        } catch (switchError) {
            // This error code indicates that the chain has not been added to MetaMask.
            if (switchError.code === 4902) {
                console.log("This network is not available in your metamask, please add it")
                try {
                    await provider.request({
                        id: 1,
                        jsonrpc: "2.0",
                        method: "wallet_addEthereumChain",
                        params: [
                          {
                            chainId: "0x13881",
                            rpcUrls: ["https://rpc-mumbai.maticvigil.com"],
                            chainName: "Polygon Testnet Mumbai",
                            nativeCurrency: {
                              name: "tMATIC",
                              symbol: "tMATIC", // 2-6 characters long
                              decimals: 18,
                            },
                            blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
                          },
                        ],
                      }); 
                    window.location.reload(false)
                } catch (addError) {
                    // handle "add" error
                    console.log("AddNetwork()", addError);
                }
            }

        }

    }
}

