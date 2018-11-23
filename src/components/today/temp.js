import React, { Component } from 'react';
import { Button, Card, CardBody, CardImage, CardTitle, CardText, Col } from 'mdbreact';
import temp from '../../assets/temp.svg';
import '../../index.css';
import { connect } from 'react-redux';

class DegreeCard extends Component {
    state = {  }
    render() { 
      return ( 
        <React.Fragment>
          <div>
            <Card style={{ width: "88%", padding: '20px 0 0 0' }}>
              <CardBody>
                <CardTitle className="text-center">
                Today weather
                </CardTitle>
                <CardText className="text-center">
                <p>
                {this.props.temp} C^
                </p>
                <img src={temp} alt="wow"/>
              </CardText>
              </CardBody>
            </Card>
          </div>
        </React.Fragment>
       );
    }
  }

  function mapState(state) 
  {
    return {
      temp: state.data
    }
  }

  export default connect(mapState)(DegreeCard);