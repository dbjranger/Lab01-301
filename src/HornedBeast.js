import React from 'react';

import './HornedBeast.css';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { AiFillHeart } from 'react-icons/ai';


class HornedBeast extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numberOfHearts: 0
    }
  }

  buttonClicked = () => {
    this.setState({
      numberOfHearts: this.state.numberOfHearts + 1
    })
  }
  
  render () {
    return (
      <div>
        <Card>
          <Card.Img variant="top" src={this.props.image_url} />
          <Card.Body>
            <Card.Title>this.props.title</Card.Title>
            <Card.Text>
              {this.props.description}
            </Card.Text>
          </Card.Body>
        </Card>
        <h2>(this.props.keyword)</h2>
        <img onClick=
          {this.buttonClicked} 
          className="animal-pictures"
          src={this.props.image_url}
          alt={this.props.keyword}
          title={this.props.title}
        />
        <div>
          <AiFillHeart />{this.state.numberOfHearts}
        </div>
        <p>
          {this.props.description}
        </p>
        <Button onClick={this.buttonClicked} variant="secondary" size="lg block">
          This is my favorite Horned Beast!
        </Button>
      </div>
    )
   }
}


export default HornedBeast;