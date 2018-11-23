import React, { Component } from 'react';
import { Button, Card, CardBody, CardImage, CardTitle, CardText, Col } from 'mdbreact';
import '../../index.css';
import {connect} from 'react-redux';
import cons from '../../store/constents';

class Git extends Component {
    state = {  }
    render() { 
      return ( 
        <React.Fragment>
          <Col>
            <Card style={{ width: "95%", padding: '20px 0 0 0' }}>
              <div className="fa fa-github fa-4x"></div>
              <CardBody>
                <CardTitle className="text-center">Enjoyed?</CardTitle>
                  <div className="row d-flex github-option">
                    <div className="col-5">
                      <div onClick={this.props.add_like} className="git-con">
                      <span className="fa fa-heart"></span><span className="pointer"> {this.props.like}</span>
                      </div>
                    </div>
                    <div className="col-7">
                      <Button color="outline-secondary" className="btn-sm" >source</Button>
                    </div>
                  </div>
              </CardBody>
            </Card>
          </Col>
        </React.Fragment>
       );
    }
  }

  function mapState(state) 
  {
    return {
      like: state.popularity
    }
  }

  function mapDispatch(dispatch)
  {
    return {
      add_like : () => {
        const store = {
          type: cons.add_like,
        }
        dispatch(store);
      }
    }
  }

  export default connect(mapState, mapDispatch)(Git);