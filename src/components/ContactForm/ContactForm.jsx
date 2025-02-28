import { Formik, Form, Field, ErrorMessage } from 'formik'; // Імпорт Formik
import * as Yup from 'yup'; // Імпорт Yup для валідації
import { useDispatch } from 'react-redux'; // Імпорт хука для екшенів
import { addContact } from '../../redux/contactsSlice'; // Імпорт екшену
import styles from './ContactForm.module.css'; // Імпорт стилів

const ContactForm = () => {
  const dispatch = useDispatch(); // Отримуємо dispatch
  const initialValues = { name: '', number: '' }; // Початкові значення форми

  const validationSchema = Yup.object({ // Схема валідації
    name: Yup.string()
      .min(3, 'Must be at least 3 characters')
      .max(50, 'Must be 50 characters or less')
      .required('Required'),
    number: Yup.string()
      .min(3, 'Must be at least 3 characters')
      .max(50, 'Must be 50 characters or less')
      .required('Required'),
  });

  const handleSubmit = (values, { resetForm }) => { // Обробник сабміту
    dispatch(addContact({ ...values, id: Date.now().toString() })); // Додаємо контакт із унікальним ID
    resetForm(); // Очищаємо форму
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <div className={styles.field}>
          <label htmlFor="name" className={styles.label}>Name</label>
          <Field type="text" id="name" name="name" className={styles.input} />
          <ErrorMessage name="name" component="div" className={styles.error} />
        </div>
        <div className={styles.field}>
          <label htmlFor="number" className={styles.label}>Number</label>
          <Field type="text" id="number" name="number" className={styles.input} />
          <ErrorMessage name="number" component="div" className={styles.error} />
        </div>
        <button type="submit" className={styles.addContact}>Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;