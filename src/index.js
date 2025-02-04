// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Home from "./components/Home";
import Transactions from "./components/Transactions";
import Addresses from "./components/Addresses";
import Wallet from "./components/Wallet";
import Transfer from "./components/transfer/Transfer";

// Define your app routes using Dashboard as the layout
const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<Dashboard />}>
            {/* The Home component will now be rendered at the root path */}
            <Route index element={<Home />} />
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
