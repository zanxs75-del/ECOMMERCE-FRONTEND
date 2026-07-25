import React from 'react';
import Navbar from './Navbar';
import HomePage from './HomePage';
import ProductPage from './ProductPage';
import RegisterPage from './RegisterPage';
import { Route, Switch } from 'wouter';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" component={HomePage} />
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