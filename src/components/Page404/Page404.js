import React from 'react';
import errorImg from '../../img/404.jpg';
import styles from './Page404.module.css';

export default function Page404() {
  return (
    <div className={styles.errorPage}>
      <h1>404 ERROR</h1>
      <p>Sorry, this page can't be found.</p>
      <img src={errorImg} alt="error 404" />
    </div>
  );
}
