import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header'
import BookList from './components/BookList';
import Search from "./components/Search";
import About from './pages/About';
import data from './models/books.json';
import './App.css';


const App = (props) => {
  const [books, setBooks] = useState(data);

  function addBook (title, id) {
    console.log(`The book ${title} was clicked`);

    const newBookList = books.filter(book => book.id !== id);
    setBooks(newBookList);
  }

  return (
      <Router> 
        <Route exact path="/" render={() => (
          <React.Fragment>
            <Header /> 
            <Search />
            <BookList books={books} addBook={addBook}/>
          </React.Fragment>
         )} />


         <Route exact path="/bookcase" render={() => (
          <React.Fragment>
            <Header />
            <p>Next page</p>
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

