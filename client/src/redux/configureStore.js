//importing redux
import {createStore, combineReducers, applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
//redusers
import { Stories } from './stories';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            stories:Stories
        }),
        compose(applyMiddleware(thunk))
    )

    return store
}