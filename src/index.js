import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import App from './App';
import App from './App2';
// import App from './App3';

// // measuring app performance. docs: https://bit.ly/CRA-vitals
// import reportWebVitals from './reportWebVitals';
// reportWebVitals(console.log);

createRoot(document.getElementById('root')).render(<StrictMode> <App/> </StrictMode>);