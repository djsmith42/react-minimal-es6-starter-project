import React from 'react'; // without this, I get ReferenceError: React is not defined. Don't know why.
import ReactDOM from 'react-dom';
import Home from './home';

ReactDOM.render(<Home />, document.getElementById("app"));
