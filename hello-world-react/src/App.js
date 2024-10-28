import React, { Suspense } from 'react';
import './style.scss'; 

const DynamicComponent = React.lazy(() => import('./DynamicComponent'));

const App = () => {
  return (
    <div>
      <h1>Hello, World!</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <DynamicComponent />
      </Suspense>
    </div>
  );
};

export default App;