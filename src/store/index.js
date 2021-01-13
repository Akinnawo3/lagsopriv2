import {applyMiddleware, createStore} from 'redux';
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import reducers from '../reducers';

export function configureStore() {

    return createStore(
        reducers,
        composeWithDevTools(applyMiddleware(thunk))
    );
}
