import React, {useReducer, createContext} from 'react';
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import CustomLayout from './CustomLayout';
import BaseRoute from './route';
import { initState, userReducer, userSignupDemo } from './context/reducers/userReducer'

export const GlobalContex = createContext()


function App() {
  const [state, dispatch] = useReducer(userReducer, initState)
  const [signupState, signupdispatch] = useReducer(userSignupDemo, initState)
  return (
    <GlobalContex.Provider value={{state, dispatch, signupState, signupdispatch}}>
    <BrowserRouter>
      <CustomLayout>
        <BaseRoute />
      </CustomLayout>
    </BrowserRouter>
    </GlobalContex.Provider>
  );
}

export default App;
