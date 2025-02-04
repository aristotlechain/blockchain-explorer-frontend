import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Transactions from "./components/Transactions";
import Addresses from "./components/Addresses";
import Wallet from "./components/Wallet";
import Dashboard from "./Dashboard";
import Transfer from "./components/transfer/Transfer";

// Font imports
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Home from "./components/Home";

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<Home />}>
            <Route index element={<Transactions />} />
            <Route path="transactions" element={<Transactions />} />
            <Route path="addresses" element={<Addresses />} />
            <Route path="wallet" element={<Wallet />} />
            <Route path="transfer/:address" element={<Transfer />} />
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