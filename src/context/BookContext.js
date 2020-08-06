import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const BookContext = createContext();

const BookContextProvider = props => {
  const [books, setBooks] = useState([
    {
      title: 'The Greater',
      author: 'Henry Lorem',
      date: '20 January 2020',
      lorem:
        'A romance writer who no longer believes in love and a literary writer stuck in a rut engage in a summer-long challenge that may just upend everything they believe about happily ever afters.',
      tags: ['drama', 'suspense', 'terror'],
      poster: './assets/mcgill-library-V1IjTXINee0-unsplash.jpg',
      id: 1
    },
    {
      title: 'Last Chance',
      author: 'Jim Harris',
      date: '20 January 2020',
      lorem:
        'A romance writer who no longer believes in love and a literary writer stuck in a rut engage in a summer-long challenge that may just upend everything they believe about happily ever afters.',
      tags: ['drama', 'suspense'],
      poster: '',
      id: 2
    },
    {
      title: 'Principle',
      author: 'Mary Kate Blanche',
      date: '20 January 2020',
      lorem:
        'A romance writer who no longer believes in love and a literary writer stuck in a rut engage in a summer-long challenge that may just upend everything they believe about happily ever afters.',
      tags: ['drama', 'suspense', 'biografia', 'tv'],
      poster: '',
      id: 3
    }
  ]);

  const addBook = (title, author) => {
    setBooks([...books, { title, author, id: uuidv4() }]);
  };

  const removeBook = id => {
    setBooks(books.filter(book => book.id !== id));
  };

  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
