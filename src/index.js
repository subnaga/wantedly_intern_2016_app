// Import Polyfills first
import 'isomorphic-fetch'

import React from 'react';
import { render } from 'react-dom';
import App from './App';

render(<App />, document.getElementById('root'));
