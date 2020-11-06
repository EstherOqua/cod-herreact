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
 <div className="book">
    <img src = {smallThumbnail} alt={title} />
        <h2 className ="title">{title}</h2>
        <p className="author">{authors ? authors.join(', '): "No Authors Listed"}</p>
        <p className="price">{listPrice && listPrice.amount}</p>   
        <p className="description">{description}</p>
</div>
    {props.addBook && (
        <button 
         onClick={() => props.addBook(title, id)} 
         className="addbutton"
        >
             Add +
         </button> 
    )}
    {props.removeBook && (
        <button 
            onClick={() => props.removeBook(id)} 
            className="coral-button"
            >
            Remove 
        </button> 
    )}
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