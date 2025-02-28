import { createSlice } from '@reduxjs/toolkit'; // Імпорт для створення слайсу

const contactsSlice = createSlice({
  name: 'contacts', // Назва слайсу
  initialState: { // Початковий стан
    items: [], // Масив контактів
  },
  reducers: { // Функції для зміни стану
    addContact: (state, action) => { // Додавання контакту
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => { // Видалення контакту
      state.items = state.items.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions; // Експорт екшенів
export default contactsSlice.reducer; // Експорт редюсера