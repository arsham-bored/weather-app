import React, { Component } from 'react';
import WeatherCard from './weather';
import DegreeCard from './temp';
import Git from './github';
import '../../index.css';
import {Provider} from 'react-redux';
import store from '../../store/store';
import {connect} from 'react-redux';
import cons from '../../store/constents';

//test
import axios from 'axios';

class Today extends Component {
    state = {  }
    componentDidMount() {
        setInterval(this.props.temp, 1000)
    }
    render() { 
        return ( 
      <React.Fragment>
            <Provider store={store}>
                <div>
                {this.props.temp}
                <div className="MyRow justify-content-center">
                    <div className="col-lig-3 col-md-4 col-sm-6 justify-content-center today-col">
                        <WeatherCard />
                    </div>
                    <div className="col-lig-3 col-md-4 col-sm-6 justify-content-center weather-col">
                        <DegreeCard className="degree" />
                    </div>
                    </div>
                    <div className="col-lig-3 col-md-4 col-sm-6 justify-content-center weather-col">
                        <Git className="Git" />
                    </div>
                    <button onClick={this.props.temp} className="btn">Click me</button>
                </div>
            </Provider>
      </React.Fragment>
         );
    }
}

function mapState(state) {
    return {
        value: state.data
    }
}

function mapDispatch(dispatch) 
{
    return {
        temp: () => {
            axios.get('http://api.openweathermap.org/data/2.5/weather?q=Rasht,Iran?id=524901&APPID=f668d0f1a949c0d9d7c9e2342bb751dc')
                .then(Response => {
                    console.log(Response.data)
                    
                    const store = {
                        type: cons.call_api,
                        data : Response.data.main.temp
                    }
                    dispatch(store);
                })
        }
    }
}
 
export default connect(mapState, mapDispatch)(Today);