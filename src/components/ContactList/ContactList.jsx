import Contact from '../Contact/Contact'; // Імпорт карточки контакту
import { useSelector } from 'react-redux'; // Імпорт хука для читання стану
import styles from './ContactList.module.css'; // Імпорт стилів

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items); // Отримуємо контакти
  const filter = useSelector(state => state.filters.name); // Отримуємо фільтр
  const filteredContacts = contacts.filter(contact => // Локальна фільтрація
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h2>Contacts</h2>
      <ul className={styles.list}>
        {filteredContacts.map(contact => (
          <Contact key={contact.id} contact={contact} /> // Передаємо пропси в Contact
        ))}
      </ul>
    </div>
  );
};

export default ContactList;