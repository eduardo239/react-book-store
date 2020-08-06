import React from 'react';
import BookContextProvider from './context/BookContext';
import Navbar from './components/Navbar';
import BookForm from './components/BookForm';
import BookList from './components/BookList';

function App() {
  return (
    <div className='App'>
      <BookContextProvider>
        <Navbar />
        <div className='container'>
          <BookList />
          <BookForm />
        </div>
      </BookContextProvider>
    </div>
  );
}

export default App;
