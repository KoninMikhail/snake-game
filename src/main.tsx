import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { DataBrowserRouter } from 'react-router-dom';
import routes from './routes';

const container = document.getElementById('root') as HTMLElement;

const root = createRoot(container);

root.render(
  <StrictMode>
    <DataBrowserRouter routes={routes} fallbackElement={<div>loading...</div>} />
  </StrictMode>
);
