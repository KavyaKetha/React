import React, { Suspense } from 'react';//lazy
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Main } from '../components/main';
export const AppRoutes = () => (
    <Router>
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {/* <Route path="/data-flow" element={<DataFlow />} /> */}
                <Route path="/dashboard" element={<Main />} />
                <Route path="/" element={<Main />} />
            </Routes>
        </Suspense>
    </Router>
);