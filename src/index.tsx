import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ThemeContext from './Context/Context';
import './Styles/reset.css'
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
      <ThemeContext>
          <App/>
     </ThemeContext>

  </React.StrictMode>
);
