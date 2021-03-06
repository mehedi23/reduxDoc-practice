### this is from action folder action file
------------------------------------------
```js
import axios from 'axios'

export const getVideoList = (id) => (dispatch) => {
    return axios({
            url: API_URL 
            method: "GET",
            params: { prospect_id: id }
        })
        .then(res => res.data)
        .then(data => {
            dispatch({
                'type': 'SSS_PPP_FFF', 
                'payload': { data: data.videos }
            })
        })
        .catch(err => {})
}
```

### this is from reducer folder reducer file
--------------------------------------------

```js
export const SSS_PPP_FFF_reduce = (state = '' , action) =>{
    if(action.type === "SSS_PPP_FFF"){
        return action.payload
    }
    return state
}
```




### reltion between action and reducer

1.  reducer আগে থেকে index.js file এ combine করা  থাকে , যাতে  সব জায়গাতে call করা যায় |
2.  আমরা useDispatch এর ফলে action করতে পারলেও reducer এর মাধ্যমে  payload এ data পাঠাই |
3.  action -এ যে dispatch argument call করা হয়,  এই dispatch এ type আর  payload নামে object থাকে | 
    reducer কিন্তু index.js file -এ আগে থেকেই call করা আছে | 
    action কে একটি নির্দিষ্ট  component -এ call করে dispatch করা হয় | 
    এই dispatch এর ফলে type আর  payload send করে | 
    আমরা payload মাধ্যমে data পেয়ে থাকি | 
    কিন্তু payload এর data আমরা সরাসরি পাই না | 
    payload থেকে data পেতে হলে আমাদের reducer এর type টি প্রয়োজন পরে | 
    কারণ reducer এ চালানো হয় |


```js

export const warmColdProspect = (state={}, action) => {
	switch(action.type){
		case 'AAAA_BBBB':
			return {
                        aaaaInfo: {...action.payload.data}
                    }

		case 'BBBB_AAAA':
			return {
                        aaaaInfo: {
				...state.aaaaInfo,
				has_watched: true
			}
                    } 
                        
		default:
			return state
	}
}
```



### what do we first and how do we code ( action or reducer )

dependences [ redux, react-redux , react-thunk ]

1. the first of all will be, create a file where can we combine reducer.
        1. make a folder name store
        2. make two folder under store name actions and reducers
        3. in action folder we create action and in reducers folder we create reducers
        4. inside the store folder we create a file name index.js where we will combine reducer

2. inside src/store/index.js file `(an example code)`

```js
import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { reducer_function } from ./reducer/reducer.js;
import { reducer_function_2 } from ./reducer/reducer_2.js;
import { reducer_function_3 } from ./reducer/reducer_3.js;
import { nth তম  function } from ./reducer/nth তম .js;

const allReducers = combineReducers({reducer_function , reducer_function_2 , reducer_function_3 , nth তম  function });

// if initialState need then
const initialState = {
    reducer_function = {'data' : 'any'}
}

const middleware = [thunk]
export const store = createStore(allReducers, initialState, applyMiddleware(...middleware));

// for redux extention tool
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// export const store = createStore(allReducers, initialState, composeEnhancers(applyMiddleware(...middleware)));

```
3. inside src/index.js (the main app) 
                
```js
import {Provider} from 'react-redux';
import {store} from './store/index';

ReactDom.render(
    <Provider store={store}> 
	<App/>
    </Provider>
    ,
    document.getElementById('app')
);
```


4. create an action in store/actions/nth তম action function.js      (call needed component)
5. create reducer in store/reducers/nth তম reducer function.js      (call src/store/index.js file)

6. import actions function which component they need 

7. dispatch the action function using useDispatch() 
`for example:`
```js		
import { useDispatch } from 'react-redux';
import { actions_1 } from '../store/actions/nth_action.js
import { actions_2 , actions_3 } from '../store/actions/nth_plus_action.js

const dispatch = useDispatch();

dispatch(actions_2())
dispatch(actions_3( argument_1 , argument_2, argument_3 )))

useEffect( ()=> {
    dispatch(actions_1(argument_1))
}, [] )
```



8. after dispatch now get data by payload from reducer functions
`for example:`
		
```js
import { useDispatch , useSelector } from 'react-redux';

const data_store = useSelector( state => reducer_function.data )

console.log(data_store)

```
