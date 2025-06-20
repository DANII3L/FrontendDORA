import React from 'react';
import { Route } from 'react-router-dom';
import Analytics from '../components/Analytics';

export default (
  <Route path="analytics">
    <Route index element={<Analytics />} />
  </Route>
);