import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Description from '../Description';
import Home from '../Home';
import React from 'react';

const Routing = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/:name' element={<Description />} />
        </Routes>
      </Router>
    </>
  );
};

export default Routing;
