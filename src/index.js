// Import Polyfills first
import 'isomorphic-fetch'

import React from 'react';
import { render } from 'react-dom';
import App from './App';

function getQueryParameter() {
  let result = new Object
  let query = document.location.search
  if ( 1 < query.length ) {
    let parameters = query.substring(1).split('&')
    let element = parameters[0].split('=')
    let paramKey = decodeURIComponent(element[0])
    let paramValue = decodeURIComponent(element[1])
    result[paramKey] = paramValue
  }
  return result
}

render(<App user={getQueryParameter()} ></App>, document.getElementById('root'));
