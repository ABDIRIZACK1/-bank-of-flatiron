// TransactionTable.js
import React from 'react';

function TransactionTable({ transactions }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Description</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction, index) => (
          <tr key={index}>
            <td>{transaction.description}</td>
            <td>{transaction.category}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TransactionTable;
