import React from 'react';

// import './HornedBeast.css';

class HornedBeast extends React.Component {
  render () {
    return (
      <div>
        <h2>(this.props.name)</h2>
        <img title={this.props.name} alt={this.props.name + " image"} src={this.props.imgUrl} ></img>
        <p>(this.props.description)</p>
      </div>
    )
   }
}


export default HornedBeast;