import React from 'react';
import styled from "styled-components"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="app">
       <Router>
      <div>
      <Header />
      <AppBody>
        <Sidebar/>
        <Switch>
          
          <Route path="/" exact>
            
          </Route>
        </Switch>
        </AppBody>
      </div>
    </Router>
    </div>
  );
}

export default App;
const AppBody=styled.div`
display:flex;
height:100vh;
`;
