import React from 'react';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ arrayOfTransactions }) => (
  <table className={styles.history}>
    <thead>
      <tr>
        <th>Transaction</th>
        <th>Amount</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
      {arrayOfTransactions.map(item => {
        const { id, type, amount, date } = item;
        return (
          <tr key={id}>
            <td>{type}</td>
            <td>{amount}$</td>
            <td>{date}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

export default TransactionHistory;
