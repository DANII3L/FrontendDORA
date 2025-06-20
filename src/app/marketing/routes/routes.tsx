import React from 'react';
import { Route } from 'react-router-dom';
import MarketingIdeas from '../components/MarketingIdeas';
import MarketingIdeaForm from '../components/MarketingIdeaForm';

export default (
  <Route path="marketing">
    <Route index element={<MarketingIdeas />} />
    <Route path="ideas-marketing" element={<MarketingIdeas />} />
    <Route path="nueva" element={<MarketingIdeaForm />} />
    <Route path=":id/editar" element={<MarketingIdeaForm />} />
  </Route>
);