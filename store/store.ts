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

const rootReducer = combineReducers({
  owner: ownerReducer,
  business: businessReducer,
});

const store = createStore(rootReducer);

export default store;