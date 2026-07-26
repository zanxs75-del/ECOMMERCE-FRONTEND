import React from 'react';
import Navbar from './Navbar';
import HomePage from './HomePage';
import ProductPage from './ProductPage';
import RegisterPage from './RegisterPage';
import { Route, Switch } from 'wouter';
import { useFlashMessage } from './FlashMessageStore';
import "./App.css";
import ShoppingCart from './ShoppingCart';

function App() {
const { flashMessage } = useFlashMessage();
return (<>
    {
      flashMessage.message && (
        <div className={`flash-alert alert alert-${flashMessage.type}`}>
          {flashMessage.message}
        </div>
      )
    }

      <Navbar />

    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/products" component={ProductPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/cart" component={ShoppingCart} />
    </Switch>
    <footer className="bg-dark text-white text-center py-3">
      <div className="container">
        <p>&copy; 2023 E-Shop. All rights reserved.</p>
      </div>
    </footer>
  </>
  );
}

export default App;




    



