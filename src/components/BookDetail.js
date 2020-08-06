import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';
import { v4 as uuidv4 } from 'uuid';

const BookDetails = ({ book }) => {
  const { removeBook } = useContext(BookContext);
  return (
    <li className='book' onClick={() => removeBook(book.id)}>
      <h2 className='title'>{book.title}</h2>
      <div className='tags'>
        {book.tags && book.tags.map(tag => <small key={uuidv4()}>{tag}</small>)}
      </div>
      <div className='date'>{book.date}</div>
      <p className='lorem'>{book.lorem}</p>
      <div className='author'>
        <i>{book.author}</i>
      </div>
    </li>
  );
};

export default BookDetails;
