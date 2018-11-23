import {createStore} from 'redux';
import {fetch} from './api/weather';
import cons from './constents';

// assets
import loading from '../assets/search.svg';
import coolCloud from '../assets/cool.svg';
import coldCloud from '../assets/cold.svg';
import warmCloud from '../assets/warm.svg';
import hotcloud from '../assets/hot.svg';

const initState = {
    data : [],
    popularity: 5,
    temp: 'loaing',
    des: 'wait for result',
    cloud: loading
}

function reducer (state = initState, action) 
{
    console.log('reducer is running', action);
    switch(action.type)
    {
        case cons.call_api:

            // right now its kelvin, I am going to change it
            const value = action.data;
            const c = (action.data - 273.15);

            const cold = (c <= 0);
            const cool = ( (c > 0) || (c <= 15) )
            const warm  = ( (c > 15) || (c <= 25 ) )
            const hot = ( c < 26 );

            console.log('now data is: ',state.data)
            console.log('temp is:   ', state.temp);
            if(cold)
            {
                return Object.assign({}, state, {data : c, temp : 'cold',
                    des: 'today there is a Cold weather avaible',
                    cloud: coldCloud
                 });
            } 
            else if(cool)
            {
                return Object.assign({}, state, {data : c, temp : 'cool',
                des: 'today there is a cool weather avaible',
                cloud: coolCloud
            });
            }
            else if(warm)
            {
                return Object.assign({}, state, {data : c, temp : 'warm',
                des: 'today there is warm',
                cloud: warmCloud
            });
            }
            if(hot)
            {
                return Object.assign({}, state, {data : c, temp : 'hot',
                des: 'today is hot, drink orange juice!',
                cloud: hotcloud
            });
            }

            
        case cons.add_like:
            return Object.assign({}, state, {popularity: state.popularity + 1})

        default:
            return state
    }
}

const store = createStore(reducer);
console.log('current satate:' ,store.getState());

export default store;