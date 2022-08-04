import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import Header from './Header';
import Navbar from './Navbar';
import StateProps from './StateProps';
import Variable from './Variable';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Navbar />
    <Header />
    <App />
    <Variable /> */}
    <StateProps />
  </React.StrictMode>
);
