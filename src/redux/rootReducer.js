import {combineReducers} from 'redux';
import apiReducer from "./api/apiReducer";

export default combineReducers({
    api: apiReducer
})