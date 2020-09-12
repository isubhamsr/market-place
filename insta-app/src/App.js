import React, {useReducer, createContext} from 'react';
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import CustomLayout from './CustomLayout';
import BaseRoute from './route';
import { GlobalProvider } from './context/Provider'


function App() {
  return (
    <GlobalProvider>
    <BrowserRouter>
      <CustomLayout>
        <BaseRoute />
      </CustomLayout>
    </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
