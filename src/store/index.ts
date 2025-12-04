import { createStore, combineReducers, compose } from 'redux';
import { formReducer } from './reducer';

const rootReducer = combineReducers({
  form: formReducer,
});

// Проверяем наличие Redux DevTools Extension
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers() // ← подключение DevTools
);

// Типы
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;