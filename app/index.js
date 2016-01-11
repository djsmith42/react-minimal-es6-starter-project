import React from 'react'; // Needed because the <Home> JSX below transforms to React.createElement(...)
import ReactDOM from 'react-dom';
import Home from './home';

ReactDOM.render(<Home />, document.getElementById("app"));
