import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <form className={styles.contactForm}>
        <h1 className={styles.heading}>CONTACT US</h1>
        <input type="text" required placeholder="Your Name" className={styles.inputField} />
        <input type="tel" required placeholder="Mobile" className={styles.inputField} />
        <input type="email" required placeholder="Email" className={styles.inputField} />
        <textarea required placeholder="Your Message" className={styles.textArea} />
        <button type="submit" className={styles.submitButton}>Send</button>
      </form>
    </div>
  );
}

export default Contact;
