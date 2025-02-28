import { createSlice } from '@reduxjs/toolkit'; // Імпорт для створення слайсу

const filtersSlice = createSlice({
  name: 'filters', // Назва слайсу
  initialState: { // Початковий стан
    name: '', // Рядок для фільтрації
  },
  reducers: { // Функції для зміни стану
    changeFilter: (state, action) => { // Зміна значення фільтру
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions; // Експорт екшену
export default filtersSlice.reducer; // Експорт редюсера