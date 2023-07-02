import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';


const reducer = combineReducers({
phonebook
})

export const store = configureStore({
  reducer,
});