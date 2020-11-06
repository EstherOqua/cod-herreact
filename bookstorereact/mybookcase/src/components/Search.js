import React, {useState} from 'react';
import { Form, Button } from 'react-bootstrap';

function Search (props) {
    function handleSubmit (event) {
        event.preventDefault();
        props.findBooks(props.keyword);
    }
    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <input className="search-bar" type="text" value={props.keyword} onChange ={(event) => props.setKeyword(event.target.value)} />
            <button className="search-button">Search</button>
        </form>
    // <Form onSubmit={handleSubmit} className="search-form">
    //      <Form.Group controlId="searchKeyword">
    //         {/* <Form.Label>Enter Search</Form.Label> */}
    //          <Form.Control
    //         className="search-bar"
    //         type="keyword" 
    //         // placeholder="Enter keyword" 
    //         value={props.keyword} 
    //         onChange={(event) => props.setKeyword(event.target.value)} />
    //      </Form.Group>

    //     <Button className="search-button" variant="primary" type="submit">
    //       Submit
    //      </Button>
    // </Form>

    );
}

export default Search; 