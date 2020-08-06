import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';
import BookDetails from './BookDetail';
import poster from '../assets/mcgill-library-V1IjTXINee0-unsplash.jpg';

const BookList = () => {
  const { books } = useContext(BookContext);
  return books.length ? (
    <div className='row no-gutters'>
      <div className='col-12 col-md-5'>
        <img className='poster' src={poster} alt='poster' />
      </div>
      <div className='col-12 col-md-7'>
        <ul>
          {books.map(book => (
            <BookDetails book={book} key={book.id} />
          ))}
        </ul>
      </div>
    </div>
  ) : (
    <div>Sorry ..</div>
  );
};

export default BookList;
