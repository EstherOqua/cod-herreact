import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const LogForm = () => {
  const [name,setName] = useState('');
  const [age,setAge] = useState('');
  const [location,setLocation] = useState('');

  console.log(name, age, location);

 
  function handleSubmit(event) {
    event.preventDefault();
    alert('A name was submitted: ' + name);
  }

    return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br  />

        <label>
          Age:
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
        </label>
        <br />

        <label>
          Location:
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
        </label>

        <input type="submit" value="Submit" />
      </form>

      <p>
        You have submitted:
        <ul>
        <li>Name: {name}</li>
        <li>Age: {location}</li>
        <li>Location: {location}</li>
        </ul>
      </p>
    </>
    );
}

ReactDOM.render(<LogForm />,document.getElementById('root'));







// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// // const name = 'Esther'

// // function Greeting (user) {
// //   if (user) {
// //     return <h1>{name}'s Reading List</h1>;
// //   }
// //   return <h1>Just a Reading List</h1>
// // }
// // // const element = <h1>{name}'s Reading List</h1>
// // console.log(Greeting(name));
// // ReactDOM.render(Greeting(name), document.getElementById('root'));

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
