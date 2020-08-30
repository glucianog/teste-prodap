import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './pages/Home';
import QuestionOne from './pages/QuestionOne';
import QuestionTwo from './pages/QuestionTwo';
import QuestionThree from './pages/QuestionThree';

function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/question-one" component={QuestionOne} />
      <Route exact path="/question-two" component={QuestionTwo} />
      <Route exact path="/question-three" component={QuestionThree} />
    </BrowserRouter>
  );
}

export default Routes;