import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import components
import MainLayout from './components/mainLayout/mainLayout';

function App() {
  return (
    <MainLayout />
  );
}
ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
