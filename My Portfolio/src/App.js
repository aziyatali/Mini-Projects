
import React, {useState, Suspense} from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Blog from './components/blog';
import Home from './components/home';
import Portfolio from './components/portfolio';

import './App.scss';
import {BrowserRouter, Switch, Route} from 'react-router-dom'



const Profile = React.lazy(()=>import('./components/profile'));

function App() {
    
  return (
    <BrowserRouter>
      <div className="parent">
      <Header/>
        <Switch>
          <Route exact path="/"><Home/></Route>
          <Route path="/works"><Portfolio/></Route>
          <Route path="/blog"><Blog/></Route>
          <Route path="/CV"><Profile/></Route>
        </Switch>
        <Footer/>  
      </div>
    </BrowserRouter>
  );
}

export default App;
