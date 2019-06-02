import React from 'react';
import ReactDOM from 'react-dom';
import Car from './car.js';

const myfirstelement = <h1>Hello React!</h1>

//without JSX - const myelement = React.createElement('h1', {exp like a+b}, 'I do not use JSX!');

// below are exported from external file car.js
//class Car extends React.Component {
//   render() {
//      return <h2>Hi, I am a Car!</h2>;
//    }  }

//ReactDOM.render(myfirstelement, document.getElementById('root'));
ReactDOM.render(<Car/>, document.getElementById('root'));

