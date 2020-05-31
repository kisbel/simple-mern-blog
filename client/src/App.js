import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Article from './components/articles/Article';
import Articles from './components/articles/Articles';
import ArticleForm from './components/articles/ArticleForm';

const App = () => {
  useEffect(() => {
    console.log('about to fetch');
    fetch('/ping')
      .then(res => res.json())
      .then(res => console.log('res', res));
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Container>
          <Switch>
            <Route path='/articles/new' component={ArticleForm} />
            <Route path='/articles/:articleId/edit' component={ArticleForm} />
            <Route path='/articles/:articleId' component={Article} />
            <Route path='/articles' component={Articles} />
          </Switch>
        </Container>
      </BrowserRouter>
    </div>
  );
};

export default App;
