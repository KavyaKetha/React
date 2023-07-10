// React.lazy currently only supports default exports. If the module you want to import uses named exports,
//  you can create an intermediate module that reexports it as the default. This ensures that tree shaking 
//  keeps  working and that you don’t pull in unused components.
// export { MyComponent as default } from "./ManyComponents.js"; ==>should be exported in the respective component in this way

import React, { Suspense } from 'react';//lazy
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { DataFlow } from '../Components/DataFlow/DataFlow';
// const DataFlow = lazy(() => import('../Components/DataFlow/DataFlow'));
// import { ErrorBoundary } from '../Components/ErrorBoundry/ErrorBoundary';

export const AppRoutes = () => (
    <Router>
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/data-flow" element={<DataFlow />} />
            </Routes>
        </Suspense>
    </Router>
);