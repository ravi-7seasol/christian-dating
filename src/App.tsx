import React from 'react';
import './App.css';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/Routes';
import { Provider } from 'react-redux';
import store from './redux/store';
import { useLocation } from "react-router-dom";
import { ToastContainer, toast, cssTransition } from "react-toastify";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe('pk_RXwtgk4Z5VR82S94vtwmam6P8qMXQ');

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
          <Elements stripe={stripePromise}>
            <BrowserRouter>
              <ToastContainer transition={bounce} />
              <Routes />
            </BrowserRouter>
          </Elements>
        </Provider>

      </React.Suspense>
    </div>
  );
}

export default App;
