import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './css/global.css'

import { asyncWithLDProvider } from 'launchdarkly-react-client-sdk';

(async () => {
  const LD_CLIENT_ID = process.env.REACT_APP_LD_CLIENT_ID
  console.log(LD_CLIENT_ID)
  const LDProvider = await asyncWithLDProvider({
    clientSideID: LD_CLIENT_ID
  });

  ReactDOM.render (
    <React.StrictMode>
      <LDProvider>
        <App />
      </LDProvider>
    </React.StrictMode>,
    document.getElementById('root'),
  );
})();
