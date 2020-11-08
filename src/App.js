import React from 'react';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import './App.css';

const App = () => {
  return (
      <div className='app-wrapper'>
          <Header />
          <Navbar />
          <div className='app-wrapper-content'>
              <Dialogs />
          </div>

      </div>
  );
};

export default App;
