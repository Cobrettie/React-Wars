import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const Router = () => {
  return (
    <BrowserRouter>
      <Link to='/'>Characters</Link>
    </BrowserRouter>
  )
}

export default Router;