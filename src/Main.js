import React from 'react';

import './Main.css';

import HornedBeast from './HornedBeast';
import hornedBeastConstants from './constants/hornedBeastConstants.json';


class Main extends React.Component {
  render() {
    let beasts = hornedBeastConstants.map( (item, index) => (
        <HornedBeast 
          name={item.title} 
          title={item.title} 
          imgUrl={item.image_url} 
          description={item.description} 
          key={index}
        />)
    )
    return (
      <main>
        {beasts}
      </main>)
  }
}

export default Main;