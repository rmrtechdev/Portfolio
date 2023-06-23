import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { HashRouter, BrowserRouter } from "react-router-dom"
import { createRoot } from 'react-dom/client';
import $ from 'jquery';
import 'jquery-ui';


const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
 



root.render(<React.StrictMode>
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <App />
  </BrowserRouter>
</React.StrictMode> );