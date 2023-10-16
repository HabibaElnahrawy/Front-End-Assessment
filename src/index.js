import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Wrapper from './Components/Wapper';
import { Provider } from 'react-redux'
import store from './features/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Wrapper>
    <Provider store={store}>
    <App />
    </Provider>
    </Wrapper>
    
  </React.StrictMode>
);


