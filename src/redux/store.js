import {combineReducers, createStore, applyMiddleware} from 'redux';
import hotDogsReducer from "./reducers/hotdogs-reducer";
import { reducer as formReducer } from 'redux-form';

const loggerMiddleware = storeAPI => next => action => {
    console.log('prevState', storeAPI.getState());
    console.log('action', action);
    let result = next(action)
    console.log('next state', storeAPI.getState())
    return result
}
const middlewareEnhancer = applyMiddleware(loggerMiddleware)

let reducers = combineReducers({
    hotDogsPage: hotDogsReducer,
    form: formReducer
});

let store = createStore(reducers, middlewareEnhancer);

export default store;