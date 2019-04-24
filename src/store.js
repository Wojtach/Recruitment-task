import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk'
import { rootReducer } from './reducers/rootReducer';

const devTools = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : null

export const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(ReduxThunk),
        devTools)
);