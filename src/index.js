// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Transactions from "./components/Transactions";
import Addresses from "./components/Addresses";
import Wallet from "./components/Wallet";
import Transfer from "./components/transfer/Transfer";
// If you have a separate Home component, you can add it as another route
// import Home from "./components/Home";

const AppRoutes = () => (
    <Routes>
        {/* Use Dashboard as the layout for all nested routes */}
        <Route path="/" element={<Dashboard />}>
            {/* The default route (when at "/") */}
            <Route index element={<Transactions />} />
            <Route path="transactions" element={<Transactions />} />
            <Route path="addresses" element={<Addresses />} />
            <Route path="wallet" element={<Wallet />} />
            <Route path="transfer/:address" element={<Transfer />} />
            {/* Optionally, if you want a home page component:
          <Route path="home" element={<Home />} /> */}
        </Route>
    </Routes>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();
