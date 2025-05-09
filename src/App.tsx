import { useState } from 'react';
import ExcuseForm from './ExcuseForm';
import ExcuseList from './ExcuseList';
import './App.css';

export interface Excuse {
  name: string;
  reason: string;
  credibility: number;
  date: string;
  creativity: string;
  details: string;
  urgent: boolean;
}

function App() {
  const [excuses, setExcuses] = useState<Excuse[]>([]);

  const addExcuse = (excuse: Excuse) => {
    setExcuses([...excuses, excuse]);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Excuse Generator</h1>
      </header>
      <main>
        <ExcuseForm onSubmit={addExcuse} />
        <ExcuseList excuses={excuses} />
      </main>
    </div>
  );
}

export default App;
