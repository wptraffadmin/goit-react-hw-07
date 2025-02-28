import { configureStore } from '@reduxjs/toolkit'; // Імпорт для створення store
import { persistStore, persistReducer } from 'redux-persist'; // Імпорт для Redux Persist
import storage from 'redux-persist/lib/storage'; // Локальне сховище браузера
import contactsReducer from './contactsSlice'; // Редюсер контактів
import filtersReducer from './filtersSlice'; // Редюсер фільтрів

const persistConfig = { // Конфігурація для збереження стану
  key: 'contacts', // Унікальний ключ для localStorage
  storage, // Використовуємо localStorage
  whitelist: ['items'], // Зберігаємо тільки поле items
};

const persistedContactsReducer = persistReducer(persistConfig, contactsReducer); // Обгортаємо contactsReducer

export const store = configureStore({
  reducer: { // Об’єкт із редюсерами
    contacts: persistedContactsReducer,
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) => // Налаштовуємо middleware
    getDefaultMiddleware({
      serializableCheck: {
        // Ігноруємо перевірку для екшенів Redux Persist
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

export const persistor = persistStore(store); // Експортуємо persistor для PersistGate