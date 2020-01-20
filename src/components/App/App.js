import React from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import './App.css';
import NavBar from '../NavBar/NavBar.jsx';
import Home from '../Home/Home.jsx';
import Footer from '../Footer/Footer.jsx';
import Blog from '../Blog/Blog.jsx';
import About from '../About/About.jsx';
import Gallery from '../Gallery/Gallery.jsx';
import PowderOmbre from '../PowderOmbre/PowderOmbre.jsx';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
          <NavBar />
      </header>
        <Switch>
      <body className="HomeBodyContainer">
        <Redirect exact to="/home" />
        <Route exact path="/home" component={Home} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/about" component={About} />

        <Route exact path="/powderombre" component={PowderOmbre} />
      </body>
        </Switch>
        <footer>
          <Footer />
        </footer>
    </div>
    </Router>
  );
}

export default App;
