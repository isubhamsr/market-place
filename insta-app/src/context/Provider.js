import React, { useReducer, createContext } from 'react';
import { initState, userReducer, userSignupDemo } from './reducers/userReducer'

export const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(userReducer, initState)
    const [signupState, signupdispatch] = useReducer(userSignupDemo, initState)

    return (
        <GlobalContext.Provider
            value={{
                state,
                dispatch,
                signupState,
                signupdispatch,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
