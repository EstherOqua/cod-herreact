import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
// import BookCounter from './BookCounter';
import books from './books.json';

const formatter = new lntl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP'
})

const book = book[0];
let {id, volumeInfo:{title, authors, description}, saleInfo: {listPrice: {amount}}} = book;

const element = <Fragment>
 <h1 id={id}> {title} = {formatter.format(amount)}</h1>
 </Fragment>;
 
//   const element =<Fragment>
// const element = <Fragment>
//  <h1>Welcome to My Library</h1>
//  <BookCounter library={{name:"Esther", theme:"Modern"}} />
// </Fragment>;

ReactDOM.render(element, document.getElementById('root'));