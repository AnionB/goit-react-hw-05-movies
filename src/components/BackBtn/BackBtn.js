import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './BackBtn.module.css';

function BackBtn({ loc }) {
  return (
    <Link className={styles.btnBack} to={loc?.state?.from ?? '/'}>
      &#10216;-Go back
    </Link>
  );
}
BackBtn.propTypes = {
  loc: PropTypes.object.isRequired,
};

export default BackBtn;
