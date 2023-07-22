import { Suspense } from 'react';
import Routes from './Routes';

const App = () => {
  return (
    <Suspense fallback={'Loading...'}>
      <Routes />
    </Suspense>
  );
};

export default App;
