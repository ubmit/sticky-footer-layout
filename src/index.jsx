import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { injectGlobal } from 'styled-components';

injectGlobal`
  body {
    background-color: purple;
    color: whitesmoke;
    font: 1.2em / 1.5 Helvetica Neue, Helvetica, Arial, sans-serif;
    padding: 0;
    margin: 0;
  }
`;

render(<App />, document.getElementById('root'));
