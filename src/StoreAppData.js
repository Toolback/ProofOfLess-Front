import React, { useReducer, createContext } from 'react';

export const initialAppDataState = {
    accounts: {}, // [] ?,
    userStatus: 'connect to retrieve',
    userAddress: 'connect to retrieve',
    userEmail: 'connect to retrieve',
    userTokens: 'connect to retrieve',
    userBalance: 'connect to retrieve',
    isMember: false,
    isAdmin: false,
    twitterUserName: 'connect to retrieve',
    inTwitterWaitingList: false,
    chainId: '0',
    listMembersAddress: [],
    listedERC721: [],
    unsoldItems: [],
    ownedTokens: []
}

export const AppDataStoreContext = createContext(initialAppDataState);

export function reducer(state, action) {
    switch (action.type) {
        case 'setAppData':
            return {
                ...state,
                accounts: action.userAccounts,
                userStatus: action.userStatus,
                userAddress: action.userAddress,
                userEmail: action.userEmail,
                userTokens: action.userTokens,
                userBalance: action.userBalance,
                isMember: action.isMember,
                isAdmin: action.isAdmin,
                twitterUserName: action.twitterUserName,
                inTwitterWaitingList: action.inTwitterWaitingList,
                chainId: action.chainId,
                listMembersAddress: action.listMembersAddress,
                listedERC721: action.listedERC721,
                ownedTokens: action.ownedTokens
            };

        default:
            throw new Error();
    }
}

export const AppDataStoreContainer = ({ children }) => {
    const [stateAppData, dispatchAppData] = useReducer(reducer, initialAppDataState);

    return (
        <AppDataStoreContext.Provider value={{ stateAppData, dispatchAppData }}>
            {children}
        </AppDataStoreContext.Provider>
    )
}



