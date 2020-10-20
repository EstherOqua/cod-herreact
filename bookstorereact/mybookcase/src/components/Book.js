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
    <img src = {smallThumbnail} />
    <h2 className ="title">{title}</h2>
    <p className="authors">{authors ? authors.join(', '): "No Authors Listed"}</p>
    <p className="price">{listPrice && listPrice.amount}</p>
    <p className="description">{description}</p>
    <button onClick={() => props.addBook(title, id)} className="coral-button">Add+</button> 
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