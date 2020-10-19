import React from 'react';
import PropTypes from 'prop-types'

const Book = (props) => {
    let {
        id, 
        volumeInfo: {title, authors, description, imageLinks: {smallThumbnail}}, 
        saleInfo: {listPrice}
    } = props.book;


 return ( 
 <div>
 <h2>{title}</h2>
  <p>{authors ? authors.join(', '): "No Authors Listed"}</p>
 <p>{listPrice && listPrice.amount}</p>
 <p>{description}</p>
 <img src = {smallThumbnail} />
 <button onClick={() => props.addBook(title, id)}>Add+</button> 
 </div>
 );
}
Book.propTypes = {
    book: PropTypes.shape({
        id:PropTypes.string,
        volumeInfo: PropTypes.shape ({
            title: PropTypes.string.isRequired,
            authors: PropTypes.array.isRequired,
            description: PropTypes.string.isRequired,
            imageLinks: PropTypes.shape({
                thumbnail: PropTypes.string,
                smallThumbnail: PropTypes.string,
            })
        }),
        saleInfo: PropTypes.shape({
            listPrice: PropTypes.shape({
                amount: PropTypes.number
            })
        })
    })
   
};
export default Book;