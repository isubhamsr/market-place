import React, {useReducer, createContext} from 'react';
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import CustomLayout from './CustomLayout';
import BaseRoute from './route';
import { initState, userReducer } from './reducers/userReducer'

export const UserContex = createContext()


function App() {
  const [state, dispatch] = useReducer(userReducer, initState)
  return (
    <UserContex.Provider value={{state, dispatch}}>
    <BrowserRouter>
      <CustomLayout>
        <BaseRoute />
      </CustomLayout>
    </BrowserRouter>
    </UserContex.Provider>
  );
}

export default App;
