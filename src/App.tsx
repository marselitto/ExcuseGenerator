import { useState } from 'react';
import ExcuseForm from './ExcuseForm';
import ExcuseList from './ExcuseList';
import './App.css';

export interface Excuse {
  id: number;
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

  const addExcuse = (excuse: Omit<Excuse, 'id'>) => {
    const newExcuse = {
      ...excuse,
      id: Date.now()
    };
    setExcuses([...excuses, newExcuse]);
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