import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header'
import BookList from './components/BookList';
import Search from "./components/Search";
import About from './pages/About';
import data from './models/books.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


const App = () => {
  const [books, setBooks] = useState(data);
  const [ keyword, setKeyword ] = useState ('');
  const [bookCase, setBookCase] = useState([]);

  function addBook (title, id) {
    const newBookList = books.filter(book => book.id !== id);
    const chosenBook = books.filter(book => book.id === id);
    
    setBooks(newBookList);
    setBookCase([...bookCase, ...chosenBook]);
    console.log(`The book ${title} was clicked`)
  }

  function removeBook (id){
    const newBookcaseList = bookCase.filter(book => book.id !== id);
    setBookCase(newBookcaseList);
  }

  async function findBooks (term) {
    const results = await fetch (
      `https://www.googleapis.com/books/v1/volumes?q=${term}&filter=paid-ebooks&print-type=books&projection=lite`
      ).then(res => res.json());
    setBooks(results.items);
  }

  return (
      <Router> 
        <Route exact path="/" render={() => (
          <React.Fragment>
            <Header /> 
            <Search findBooks={findBooks} keyword={keyword} setKeyword={setKeyword} />
            <BookList books={books} addBook={addBook} />
          </React.Fragment>
         )} />


         <Route exact path="/bookcase" render={() => (
          <React.Fragment>
            <Header />
            <BookList books={bookCase} removeBook={removeBook}/>
          </React.Fragment>
         )} />

         <Route exact path="/about" render={() => (
          <React.Fragment>
            <Header />
            <About />
          </React.Fragment>
         )} />
      </Router>

 );
}

export default App;

