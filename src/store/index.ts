import { createStore, combineReducers } from 'redux';
import { formReducer } from './reducer';

const rootReducer = combineReducers({
  form: formReducer,
});

export const store = createStore(rootReducer);

// Типы
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;