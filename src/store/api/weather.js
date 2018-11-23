import axios from 'axios';
import cons from '../constents';

const data = axios.get('http://api.openweathermap.org/data/2.5/weather?q=Rasht,Iran?id=524901&APPID=f668d0f1a949c0d9d7c9e2342bb751dc');

export function fetch() {
    return (dispatch) => {
        data.then(({data}) => {
            dispatch({
                type: cons.call_api,
                data: data
            })
        })
    }
}
