import React from 'react';
import ReactDOM from 'react-dom/client';
// import Lifecycle from './reactjsdasar/Lifecycle';
// import App from './reactjsdasar/App';
// import Header from './reactjsdasar/Header';
// import Navbar from './reactjsdasar/Navbar';
// import StateProps from './reactjsdasar/StateProps';
// import Variable from './reactjsdasar/Variable';
// import Map from './reactjsdasar/Map';
import 'bootstrap/dist/css/bootstrap.min.css';
import Crud from './crud';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Navbar />
    <Header />
    <App />
    <Variable /> 
    <StateProps /> 
    <Map /> 
    <Lifecycle /> */}
    <Crud />
  </React.StrictMode>
);
