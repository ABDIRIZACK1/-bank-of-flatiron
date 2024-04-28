// App.js
import React, { useState } from 'react';
import Header from './Components/Header';
import SearchInput from './Components/SearchInput ';
import TransactionForm from './Components/TransactionForm ';
import TransactionTable from './Components/TransactionTable ';
import './App.css'


function App() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortByCategory, setSortByCategory] = useState(null);
  const [sortByDescription, setSortByDescription] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc'); // or 'desc'

  const addTransaction = (newTransaction) => {
    setTransactions((prevTransactions) => [...prevTransactions, newTransaction]);
  };

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sorting function
  const sortedTransactions = [...filteredTransactions].sort((a, b) => {
    if (sortByCategory) {
      return sortOrder === 'asc' ? a.category.localeCompare(b.category) : b.category.localeCompare(a.category);
    } else if (sortByDescription) {
      return sortOrder === 'asc' ? a.description.localeCompare(b.description) : b.description.localeCompare(a.description);
    }
    return 0;
  });

  return (
    <div className="container">
      <Header />
      <SearchInput searchTerm={searchTerm} onSearchTermChange={setSearchTerm} />
      <TransactionForm onAddTransaction={addTransaction} />
      <div className="sort-buttons">
        <button onClick={() => {setSortByCategory(true); setSortByDescription(false);}}>Sort by Category</button>
        <button onClick={() => {setSortByCategory(false); setSortByDescription(true);}}>Sort by Description</button>
        <button onClick={() => setSortOrder(order => order === 'asc' ? 'desc' : 'asc')}>Toggle Sort Order</button>
      </div>
      <TransactionTable transactions={sortedTransactions} />
    </div>
  );
}

export default App;

