import React from 'react';

import HornedBeast from './HornedBeast';
import hornedBeastConstants from './constants/hornedBeastConstants';

// import './Main.css';

class Main extends React.Component {
  render() {
    let beasts = [];
    hornedBeastConstants.forEach( item => {
      beasts.push(
        <HornedBeast 
          name={item.title} 
          title={item.title} 
          imgUrl={item.image_url} 
          description={item.description} 
        />)
    })
    return (
      <main>
        {beasts}
      </main>)
  }
}

export default Main;