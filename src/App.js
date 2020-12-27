import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopMenu from './components/TopMenu';
import LandingPage from './components/LandingPage';
import ContactUs from "./components/ContactUs";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Products from "./components/products/Products";
import NewProduct from "./components/products/NewProduct";
import UpdateProduct from "./components/products/UpdateProduct";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import userService from "./services/UserService";

function App() {
  return (
    <Router>
      <div>
        <ToastContainer />
        <TopMenu />
        <div className="container">
        <div style={{padding:"7px"}}>
            <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            
            {userService.isLoggedIn() && (
              <Route path="/products/new" component={NewProduct} />
            )}
              
            <Route path="/products/update/:id" component={UpdateProduct} />
            <Route path="/products" component={Products} />
            <Route path="/contactus" exact component={ContactUs} />
            <Route path="/" exact component={LandingPage} />
          </Switch>
        </div>
        </div>
      </div>
      <Footer />
    </Router>
    

  );
}

export default App;
