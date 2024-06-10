import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Events from './components/Events';
import Usestate from './components/Usestate';
import Conditionrendering from './components/condition-rendering';
import Products from './components/Products/Products';
import { Container } from 'react-bootstrap';

const App = () => {
  return (
    <>
    <div className='App shadow p-3 mb-5 bg-body-tertiary rounded '>
    <Container>
    <Products />

    </Container>

    </div>
    </>
  );
};

export default App;