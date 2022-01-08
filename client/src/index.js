import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ErrorBoundary from './ErrorBoundary';
import App from './App';


import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <ErrorBoundary>
            <Router>
                <App />
            </Router>
            <ToastContainer
                transition={Slide}
                style={{ width: '500px', fontSize: '22px' }}
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <div id="loading-ux-container"></div>
        </ErrorBoundary>
    </React.StrictMode>,
    document.getElementById('root')
);

