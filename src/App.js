import React from 'react';
import './App.css';

import Header from './Header';
import Main from './Main';
// import HornedBeast from './HornedBeast';
import Footer from './Footer';



class App extends React.Component {
  render() {
    return (
      <div>
          <Header />
          <Main />
          <Footer />
      </div>
    );
  }
}


export default App;
