import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://dev223729.service-now.com/scripts/sn_csm_ec.js?v=5.6";
    script.async = true;
    script.onload = () => {
      // @ts-ignore pour ignorer l'erreur TypeScript si SN_CSM_EC n’est pas typé
      window.SN_CSM_EC?.init({
        moduleID: "https://dev223729.service-now.com/#0f2361d3c3662210255c5b2ed401316f",
        loadFeature: window.SN_CSM_EC?.loadEMFeature()
      });
    };
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
