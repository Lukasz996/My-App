import { Store } from 'redux';
import rootReducer from './reducers'; // Zaimportuj swój główny reducer (lub kombinację reducerów)

const store = Store(rootReducer);

export default store;