import { StrictMode } from 'react'; // Додає додаткові перевірки в режимі розробки
import { createRoot } from 'react-dom/client'; // Новий API рендерингу для React 18
import { Provider } from 'react-redux'; // Зв’язує Redux із React
import { PersistGate } from 'redux-persist/integration/react'; // Чекає завантаження стану з локального сховища
import { store, persistor } from './redux/store.js'; // Імпорт store і persistor
import './index.css'; // Глобальні стилі
import App from './App.jsx'; // Головний компонент додатка

createRoot(document.getElementById('root')).render( 
  <StrictMode>
    <Provider store={store}> 
      <PersistGate loading={null} persistor={persistor}> 
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>
);