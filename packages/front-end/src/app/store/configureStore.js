import { createStore, applyMiddleware, compose } from 'redux';
import { createOptimisticReducer, optimisticThunk } from "redux-optimistic-thunk";
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const store = createStore(
  createOptimisticReducer(rootReducer),
  compose(
    applyMiddleware(thunk, optimisticThunk()),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
