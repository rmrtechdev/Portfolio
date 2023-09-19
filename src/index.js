import React from 'react'
import './index.css'
import App from './App'
import { BrowserRouter} from "react-router-dom"
import { createRoot } from 'react-dom/client';



const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
 
// basename="/portfolio/" ==>>


root.render(<React.StrictMode>
  <BrowserRouter  basename={process.env.PUBLIC_URL}>
    <App />
  </BrowserRouter>
</React.StrictMode> );