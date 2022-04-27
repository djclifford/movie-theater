import { useEffect } from 'react';
import { actions } from './store/actions';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { LandingPage } from './components/LandingPage';
import { Checkout } from './components/Checkout';
import { FilmDetails } from './components/FilmDetails';
import NotFound from './components/NotFound';
import { Account } from './components/authentication/Account';
import { PickSeats } from './PickSeats';

function App() {
  return (
    <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <header className="mdl-layout__header">
        <div className="mdl-layout__header-row">
          <a href="/" className="mdl-layout-title">Dinner and a Movie</a>
          <nav className="mdl-navigation mdl-layout--large-screen-only">
            <a href="/account" className="mdl-layout__tab">My account</a>
            <a href="/logout" className="mdl-layout__tab">logout</a>
            <a href="/checkout" className="mdl-layout__tab"><i className="material-icons">shopping_cart</i></a>
            <a href="/login" className="mdl-layout__tab">Login</a>
            <a href="/register" className="mdl-layout__tab">Register</a>
          </nav>
        </div>
      </header>
      <div className="mdl-layout__drawer">
        <a href="/" className="mdl-layout-title">Dinner and a Movie</a>
        <nav className="mdl-navigation">
          <a href="/account" className="mdl-layout__link">My account</a>
          <a href="/logout" className="mdl-layout__link">logout</a>
          <a href="/checkout" className="mdl-layout__link"><i className="material-icons">shopping_cart</i></a>
          <a href="/login" className="mdl-layout__link">Login</a>
          <a href="/register" className="mdl-layout__link">Register</a>
        </nav>
      </div>
      <main className="mdl-layout__content">
        <PickSeats></PickSeats>
      </main>
      <footer>
      </footer>
    </div>
  );
}

export default App;
