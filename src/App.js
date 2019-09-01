import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import 'whatwg-fetch';
import Main from '../src/components/MainComponent/MainComponent';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Main/>
      </div>
    </BrowserRouter>
  );
}

export default App;
