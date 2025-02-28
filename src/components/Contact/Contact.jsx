import PropTypes from 'prop-types'; // Імпорт PropTypes для валідації пропсів
import { useDispatch } from 'react-redux'; // Імпорт хука
import { deleteContact } from '../../redux/contactsSlice'; // Імпорт екшену
import Phone from '../../assets/phone.svg'; // Імпорт іконки телефону
import User from '../../assets/user.svg'; // Імпорт іконки користувача
import styles from './Contact.module.css'; // Імпорт стилів

const Contact = ({ contact }) => { // Пропс contact
  const dispatch = useDispatch(); // Отримуємо dispatch

  const handleDelete = () => { // Обробник видалення
    dispatch(deleteContact(contact.id)); // Викликаємо екшен
  };

  return (
    <li className={styles.item}>
      <div className={styles.itemContainer}>
        <span className={styles.name}><User className={styles.icon}/>{contact.name}</span>
        <span className={styles.number}><Phone className={styles.icon}/>{contact.number}</span>
      </div>
      <button onClick={handleDelete} className={styles.delete}>Delete</button>
    </li>
  );
};

// Додаємо валідацію пропсів
Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired, // ID має бути рядком і обов’язковим
    name: PropTypes.string.isRequired, // Ім’я має бути рядком і обов’язковим
    number: PropTypes.string.isRequired, // Номер має бути рядком і обов’язковим
  }).isRequired, // Сам об’єкт contact обов’язковий
};

export default Contact;