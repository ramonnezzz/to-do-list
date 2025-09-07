import { useState } from 'react'
import './App.css'
import { Header } from './components/header/header';

export interface Tarefa {
  id: number;
  tarefa: string;
  selecionado: boolean;
  completado?: boolean
}

function App() {
  const [tarefa, setTarefas] = useState<Tarefa[]>([]);
  const [inputTarefa, setInputTarefa] = useState("");
  function addTarefa() {
    if (inputTarefa.trim() === '') return;

    const novaTarefa: Tarefa = {
      id: Math.random(),
      tarefa: inputTarefa,
      selecionado: false,
      completado: false,
    };
    setTarefas([...tarefa, novaTarefa]);
    setInputTarefa('');
  }

  function toggleCompletarTarefa(id: number) {
    setTarefas(tarefa =>
      tarefa.map(t =>
        t.id === id ? { ...t, completado: !t.completado } : t
      )
    );
  }





  return (
    <>
      <Header />
      <div className="App">
        <div className="input-container">
          <input type="text" placeholder="Adicione uma nova tarefa" value={inputTarefa} onChange={(e) => setInputTarefa(e.target.value)} />
          <button onClick={addTarefa}>Adicionar</button>
        </div>
      </div>
    </>
  )
}

export default App
