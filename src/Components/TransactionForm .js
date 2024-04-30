 // TransactionForm.js
import React, { useState } from 'react';

function TransactionForm({ onAddTransaction }) {
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !category || !date) return;
    const newTransaction = { description, category, date };
    onAddTransaction(newTransaction);
    setDescription('');
    setCategory('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
    <input type="date" placeholder="date" value={date} onChange={(e) => setDate(e.target.value)} /> 
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default TransactionForm;
