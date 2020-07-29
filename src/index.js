import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';

const Page404 = () => (
  <div style={{ color: 'var(--primary)' }}>
    <h1>Página não encontrada</h1>
  </div>
)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' component={Home} exact />
      <Route path='/cadastro/video' component={CadastroVideo} exact/>
      <Route path='/cadastro/categoria' component={CadastroCategoria} exact/>
      <Route component={Page404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);