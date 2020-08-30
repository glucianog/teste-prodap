import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './pages/Home';
import QuestionOne from './pages/QuestionOne';

function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/question-one" component={QuestionOne} />
    </BrowserRouter>
  );
}

export default Routes;