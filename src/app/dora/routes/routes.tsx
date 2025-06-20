import React from 'react';
import { Route } from 'react-router-dom';
import DoraChat from '../components/DoraChat';

export default (
  <Route path="dora-chat">
    <Route index element={<DoraChat />} />
  </Route>
);