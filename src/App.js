import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchLocations } from './actions/locationActions.js';
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LocationList from './components/LocationList.js';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLocations());
  }, [dispatch]);

  return (
    
    
      <div className="App">
        <header className="App-header">
          <h1>Location Bookmark App</h1>
        </header>
        <main>
          <LocationList />
        </main>
      </div>

  );
};

export default App;
