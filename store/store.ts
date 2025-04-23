// import { createStore } from 'redux';
// import { combineReducers } from 'redux';
// import ownerReducer from './reducers/ownerReducer';

// // Combine reducers if you have multiple reducers
// const rootReducer = combineReducers({
//   owner: ownerReducer,
// });

// // Create Redux store
// const store = createStore(rootReducer);

// export default store;





import { createStore } from 'redux';
import { combineReducers } from 'redux';
import ownerReducer from './reducers/ownerReducer';
import businessReducer from './reducers/businessReducer';
import tradingReducer from './reducers/tradingReducer';
import bankReducer from './reducers/bankReducer';

const rootReducer = combineReducers({
  owner: ownerReducer,
  business: businessReducer,
  trading: tradingReducer,
  bank:bankReducer,
});

const store = createStore(rootReducer);

export default store;