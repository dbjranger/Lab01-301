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
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={this.props.image_url} style={{ width: '100%' }}/>
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              {this.props.description}
            </Card.Text>
            <div>
              <AiFillHeart />{this.state.numberOfHearts}
            </div>
            <br></br>
            <Button onClick={this.buttonClicked} variant="secondary" size="lg block">
              This is my favorite Horned Beast!
            </Button>
          </Card.Body>
        </Card>
    );
   }
}


export default HornedBeast;