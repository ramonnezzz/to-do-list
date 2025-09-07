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
  function addTarefa(){
    if(inputTarefa.trim() === '')return;

    const novaTarefa = {
      id: Math.random(),
      tarefa: inputTarefa,
      selecionado: false,

    };
    setTarefas([...tarefa, novaTarefa]); setInputTarefa('');
  }

  function selecionarTarefa(tarefaSelecionada: Tarefa){
    const tarefasAtualizadas = tarefa.map((tarefa) => ({...tarefa, selecionado: tarefa.id === tarefaSelecionada.id ? !tarefa.selecionado : false}));
    setTarefas(tarefasAtualizadas);
  }

  function completarTarefa(){
    const tarefaSelecionada = tarefa.find((tarefa) => tarefa.selecionado);
    if(!tarefaSelecionada) return;

    const tarefasAtualizadas = tarefa.map((tarefa) => {
      if(tarefa.id === tarefaSelecionada.id){
        return {...tarefa, selecionado: false, completado: true};
      }
      return tarefa;
    });
    setTarefas(tarefasAtualizadas);
  }

  function limparTarefasCompletadas(){
    const tarefasNaoCompletadas = tarefa.filter((tarefa) => !tarefa.completado);
    setTarefas(tarefasNaoCompletadas);
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
