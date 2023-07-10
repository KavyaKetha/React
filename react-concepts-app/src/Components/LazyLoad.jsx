// React.lazy currently only supports default exports. If the module you want to import uses named exports,
//  you can create an intermediate module that reexports it as the default. This ensures that tree shaking 
//  keeps  working and that you don’t pull in unused components.
// export { MyComponent as default } from "./ManyComponents.js"; ==>should be exported in the respective component in this way



import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const DataFlow = lazy(() => import('./Components/DataFlow/DataFlow'));
// const About = lazy(() => import('./routes/About'));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {/* <Route path="/" element={<Home />} />*/}
        <Route path="/dataflow" element={<DataFlow />} /> 
      </Routes>
    </Suspense>
  </Router>
);