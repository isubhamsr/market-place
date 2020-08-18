import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import CustomLayout from './CustomLayout';
import BaseRoute from './route';

function App() {
  return (
    <BrowserRouter>
      <CustomLayout>
        <BaseRoute />
      </CustomLayout>
    </BrowserRouter>
  );
}

export default App;
