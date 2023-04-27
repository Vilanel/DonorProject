import {combineReducers, createStore} from 'redux'
import generalInfoReducer from "./generalInfoReducer";

const reducers = combineReducers({
    generalInfo: generalInfoReducer
});

const store = createStore(reducers);

export default store;
