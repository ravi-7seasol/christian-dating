import React from 'react';
import './App.css';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/Routes';
import { Provider } from 'react-redux';
import store from './redux/store';
import {useLocation } from "react-router-dom";
import { ToastContainer, toast, cssTransition } from "react-toastify";



function App() {
  // const location = useLocation();

  const bounce = cssTransition({
    enter: "animate__animated animate__bounceIn",
    exit: "animate__animated animate__bounceOut"
  });
  
  return (
    
    // <div className={location.pathname === "/" ? "App position-relative min-vh-100" : "App position-relative min-vh-100 homepage-bg"}>
    <div className="App position-relative min-vh-100">
      <React.Suspense fallback={false}>

        <Provider store={store}>
          <BrowserRouter>
          <ToastContainer transition={bounce}  />

            <Routes />
          </BrowserRouter>
        </Provider>

      </React.Suspense>
    </div>
  );
}

export default App;
