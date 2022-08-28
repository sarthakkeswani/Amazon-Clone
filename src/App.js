import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import { useEffect } from "react";
import { auth } from "./firebase1";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51LaO62SIlEmxgFnEqYeiqKw7nxiPEHfl6weVeUCuMnN7Fj4DhyD5a2BXmq2uF8WTNnCKthmQwTJjOxK5wQF4QO4d00aADHIDsv"
);

function App() {
  const [{}, dispatch] = useStateValue();
  //will only run once when the app component loads...
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);
      if (authUser) {
        //the user just logged in or the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/checkout" element={[<Header />, <Checkout />]} />
          <Route
            exact
            path="/payment"
            element={[
              <Header />,
              <Elements stripe={promise}>
                <Payment />
              </Elements>,
            ]}
          />
          <Route exact path="/" element={[<Header />, <Home />]} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
