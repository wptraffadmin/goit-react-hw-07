import { useSelector, useDispatch } from 'react-redux'; // Імпорт хуків Redux
import { changeFilter } from '../../redux/filtersSlice'; // Імпорт екшену
import styles from './SearchBox.module.css'; // Імпорт стилів

const SearchBox = () => {
  const filter = useSelector(state => state.filters.name); // Отримуємо значення фільтру
  const dispatch = useDispatch(); // Отримуємо dispatch

  const handleChange = (e) => { // Обробник зміни значення
    dispatch(changeFilter(e.target.value)); // Викликаємо екшен
  };

  return (
    <div className={styles.searchBox}>
      <label htmlFor="search" className={styles.label}>Find contacts by name</label> {/* Змінив h2 на label */}
      <input
        type="text"
        id="search"
        value={filter} // Значення з Redux
        onChange={handleChange} // Локальний обробник
        className={styles.input}
      />
    </div>
  );
};

export default SearchBox;