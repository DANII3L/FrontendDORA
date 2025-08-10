import React from 'react';
import { Route } from 'react-router-dom';
import Dashboard from '../components/Dashboard';

export default (
  <Route path="dashboard">
    <Route index element={<Dashboard />} />
  </Route>
);