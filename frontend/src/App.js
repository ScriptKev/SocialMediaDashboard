import React from 'react';
import './assets/scss/main.scss';
import PxHeader from './components/PxHeader/PxHeader';
import PxMainSocialData from './components/PxMain/PxMainSocialData';

function App() {
  return (
    <div className="App">
      <div style={{
          display: 'inherit',
          width: '100%',
          maxWidth: '1160px',
          margin: '0 auto',
          padding: '0 25px',
          justifyContent: 'inherit'
        }}>
        <PxHeader />
        <PxMainSocialData />
      </div>
    </div>
  );
}

export default App;
