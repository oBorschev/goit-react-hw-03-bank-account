import React from 'react';
import styles from './Balance.module.css';

const Balance = ({ withdraw, deposit, balance }) => (
  <section className={styles.balance}>
    <span>⬆️{withdraw}$</span>
    <span>⬇️{deposit}$</span>
    <span>Balance: {balance}$</span>
  </section>
);

export default Balance;
