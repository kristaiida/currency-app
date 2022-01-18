import './App.css';
import { useState } from 'react';

function App() {
  const [eur, setEur] = useState(0);
  const [gbd, setGbd] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    const conversion = eur * 0.9;
    setGbd(conversion);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Valuuttalaskuri</h3>
      <div>
        <label>EUR</label>
        <input type="number" value={eur} onChange={e => setEur(e.target.value)} />
      </div>
      <div>
        <label>GBD</label>
        <output>{gbd}</output>
      </div>
      <button>Laske</button>
    </form>
  );
}

export default App;
