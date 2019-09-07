import {createStore, combineReducers, applyMiddleware} from 'redux';
import postList from './reducers/postList';
import thunk from 'redux-thunk';

const reducers = combineReducers({
    postList
});

const store = createStore(reducers, applyMiddleware(thunk));
export default store;