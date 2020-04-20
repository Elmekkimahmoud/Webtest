import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, link} from 'react-router-dom';

import Userslist from './users-list';
import Postslist from './posts-list';




function App() {
  return (
    <Router>
    <div className="App">
      <Userslist/>
     
      <Route path='/user/:id'  component={Postslist} />
    
    </div>
    </Router>
  );
}

export default App;
