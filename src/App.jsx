import ContactForm from './components/ContactForm/ContactForm'; // Імпорт форми
import ContactList from './components/ContactList/ContactList'; // Імпорт списку
import SearchBox from './components/SearchBox/SearchBox'; // Імпорт пошуку
import './App.css';


function App() {
  return (
    <div id="root">
      <h1>Phonebook</h1>
      <ContactForm /> {/* Без пропсів */}
      <SearchBox /> {/* Без пропсів */}
      <ContactList /> {/* Без пропсів */}
    </div>
  );
}

export default App;