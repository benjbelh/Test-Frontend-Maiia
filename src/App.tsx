import React, { FC } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppRoutes from './routes';

const App: FC<{}> = () => (
  <div className="App">
    <AppRoutes />
    <ToastContainer autoClose={5000} position="top-right" hideProgressBar closeOnClick />
  </div>
);

export default App;
