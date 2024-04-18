// App.js
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchLocations } from './actions/locationActions.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import LocationList from './components/LocationList.js';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLocations());
  }, [dispatch]);

  return (
    <div className="container">
      <Header />
      <main className="main-content">
        <LocationList />
      </main>
      <Footer />
    </div>
  );
};

export default App;
