import { lazy, Suspense } from 'react';
import './App.css';
// import Artists from './Artists';
const Artists = lazy(()=> {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("./Artists")), 30000);
  });
});

function App() {
  return (
    <div className="App">
      <Suspense fallback={<h1>Still Loading...</h1>}>
        <Artists />
      </Suspense>
    </div>
  );
}

export default App;
