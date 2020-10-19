import React from 'react';
import './About.css';

function About() {
    return(
        <div>
            <h1 className="heading">Welcome to the Bookcase Application</h1>
            <p>
              The following aqpplication was created by Esther Oqua. 
              This bookcase displaces a list of books that a user can save to a local bookcase.
            </p>
            <p>
            Click on the "Add +" button to add a book to your bookcase. 
            Use the search bar to find the latest books by name, author or description
            </p>
        </div>
    )

}

export default About;