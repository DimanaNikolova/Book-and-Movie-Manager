import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import App from './App';


import './index.css';

ReactDOM.render(
    <React.StrictMode>
            <Router>
                <App />
            </Router>
            <ToastContainer
                transition={Slide}
                style={{ width: '300px', fontSize: '14px'}}
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <div id="loading-ux-container"></div>
    </React.StrictMode>,
    document.getElementById('root')
);

