//http://api.openweathermap.org/data/2.5/weather?q=Rasht,Iran?id=524901&APPID=f668d0f1a949c0d9d7c9e2342bb751dc
import React, { Component } from 'react';
import { Button, Card, CardBody, CardImage, CardTitle, CardText, Col } from 'mdbreact';
import rainy from '../../assets/rainy.svg';
import '../../index.css';
import {connect} from 'react-redux';

class WeatherCard extends React.Component {
  componentDidMount() {
    console.log(this.props.data);
  }
    render() {
      return (
        <Col>
          <Card style={{ width: "95%", padding: '20px 0 0 0' }}>
            <CardImage
              style ={{
                width : '8em',
              }}
              className="img-fluid"
              src={this.props.src}
              waves
            />
            <CardBody>
              <CardTitle>Today weather: {this.props.temp}</CardTitle>
              <CardText>
                {this.props.des}
              </CardText>
              <Button color="outline-success" className="btn-md" href="#">More</Button>
            </CardBody>
          </Card>
        </Col>
      )
    }
  }

  function mapState(state)
  {
    return {
      data: state.data,
      temp: state.temp,
      des: state.des,
      src: state.cloud
    }
  }

export default connect(mapState)(WeatherCard);