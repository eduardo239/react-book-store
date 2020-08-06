import React, { useContext, useState } from 'react';
import { BookContext } from '../context/BookContext';

const BookForm = () => {
  const { addBook } = useContext(BookContext);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    addBook(title, author);
    setTitle('');
    setAuthor('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Book Title'
        value={title}
        onChange={({ target }) => setTitle(target.value)}
        required
      />
      <input
        type='text'
        placeholder='Book Author'
        value={author}
        onChange={({ target }) => setAuthor(target.value)}
      />
      <input type='submit' value='Add Book' />
    </form>
  );
};

export default BookForm;
