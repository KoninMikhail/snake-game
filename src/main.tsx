import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { DataBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import routes from './routes/routes';
import store, { persist } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';

// Prepare DOM
const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

// Start
root.render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persist}>
        <DataBrowserRouter routes={routes} fallbackElement={<div>loading...</div>} />
      </PersistGate>
    </Provider>
  </StrictMode>
);
