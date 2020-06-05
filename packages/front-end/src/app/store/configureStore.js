import { createStore, applyMiddleware, compose } from 'redux';
import { ensureState } from 'redux-optimistic-ui'
import thunk from 'redux-thunk';
import rootReducer from './reducers';

ensureState(rootReducer)

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
