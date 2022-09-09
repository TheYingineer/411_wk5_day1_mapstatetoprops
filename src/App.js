import React from 'react';
import Navigation from './components/Navigation'
import './App.css'
import Router from './Router'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      {/* // from react redux, set up in state.js in redux folder, give access to everything we put in the store.js */}
      <BrowserRouter> 
      {/* //router info */}
        <Navigation /> 
        {/* //Top header in blue */}
        <Router /> 
        {/* // where you switch btw tabs, example: home, about, dashboard */}
      </BrowserRouter>
    </Provider>
  );
}

export default App;
