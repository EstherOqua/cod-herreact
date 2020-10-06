import React from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './Product';


function App() {
//   const h1Style = { "fontSize":"60px", "color": "#033",
// "textDecoration": "uppercase" };
  return (
    <div className="App">
      <Product 
      name="Adidas Originals Utility Bumbag in Yellow"
      price="£42.95"
      description="Awesome bag!"
      image=""
      alt=""
      />
      <Product 
      name="Adidas Originals Utility Bumbag in Yellow"
      price="£42.95"
      description="Awesome bag!"
      />
      <Product 
      name="Adidas Originals Utility Bumbag in Yellow"
      price="£42.95"
      description="Awesome bag!"
      />
      <Product 
      name="Adidas Originals Utility Bumbag in Yellow"
      price="£42.95"
      description="Awesome bag!"
      />
      <Product 
      name="Adidas Originals Utility Bumbag in Yellow"
      price="£42.95"
      description="Awesome bag!"
      />

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      
      <h1 
      style = {h1Style}
      className = "titleApp">
        My First App!</h1> */}

       {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
       </a>*/}
      {/* </header> */}
    </div>
  );
}

export default App;
