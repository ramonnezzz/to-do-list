import { useState } from "react";
import "./App.css";
import { Header } from "./components/header/header";

export interface Tarefa {
  id: number;
  tarefa: string;
  selecionado: boolean;
  completado?: boolean;
}

function App() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  const [inputTarefa, setInputTarefa] = useState("");

  function addTarefa() {
    if (inputTarefa.trim() === "") return;

    const novaTarefa: Tarefa = {
      id: Math.random(),
      tarefa: inputTarefa,
      selecionado: false,
      completado: false,
    };
    setTarefas([...tarefas, novaTarefa]);
    setInputTarefa("");
  }

  function toggleCompletarTarefa(id: number) {
    setTarefas((t) =>
      t.map((item) =>
        item.id === id ? { ...item, completado: !item.completado } : item
      )
    );
  }

  function excluirTarefa(id: number) {
    setTarefas((t) => t.filter((item) => item.id !== id));
  }

  return (
    <div className="centraliza-tudo">
      <Header />
      <div className="App">
        <div className="input-container">
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            value={inputTarefa}
            onChange={(e) => setInputTarefa(e.target.value)}
          />
          <button onClick={addTarefa}>Adicionar</button>
        </div>

        <ul className="task-list">
          {tarefas.map((t) => (
            <li key={t.id} className={t.completado ? "completado" : ""}>
              <span>{t.tarefa}</span>
              <div className="actions">
                <button onClick={() => toggleCompletarTarefa(t.id)}>
                  {t.completado ? "Desfazer" : "Completar"}
                </button>
                <button onClick={() => excluirTarefa(t.id)}>Excluir</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
