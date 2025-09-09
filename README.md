# To-Do List

## 📌 Sobre o Projeto  
Este é um aplicativo simples de lista de tarefas (**To-Do List**) desenvolvido com **React**, **TypeScript**, **Vite**, **TailwindCSS** e também algumas classes CSS manuais.  
A aplicação permite **adicionar, marcar como concluídas e excluir tarefas**, mantendo tudo em uma interface minimalista.  

Durante o desenvolvimento, houve uma tentativa inicial de seguir cegamente as recomendações de uma IA, o que acabou sendo **frustrante** — muitas respostas eram confusas, incompletas ou simplesmente não funcionavam no código real. Essa experiência reforçou a importância de compreender os conceitos e experimentar por conta própria.

---

## 🛠 Tecnologias Utilizadas  
- **React** (biblioteca para construção de interfaces)  
- **TypeScript** (tipagem estática e maior segurança no código)  
- **Vite** (ferramenta de build rápida)  
- **TailwindCSS** (utilizado parcialmente para estilização)  
- **CSS tradicional** (complemento de estilos)  

---

## 📂 Estrutura de Componentes  
- **`App.tsx`**  
  - Componente principal que concentra a lógica da aplicação.  
  - Renderiza a interface e gerencia a lista de tarefas.  

- **`Header.tsx`**  
  - Exibe o título estilizado da aplicação.  

- **Lista de Tarefas (dentro do App)**  
  - Cada tarefa é exibida em um `<li>`.  
  - Possui botões para marcar como concluída ou excluir a tarefa.  

---

## ⚡ Gerenciamento de Estado (useState)  
A aplicação utiliza **React useState** para controlar:  
- **`tarefas`**: array de tarefas cadastradas.  
- **`inputTarefa`**: valor do campo de texto do usuário.  

```tsx
const [tarefas, setTarefas] = useState<Tarefa[]>([]);
const [inputTarefa, setInputTarefa] = useState("");
```

---

## 📑 Tipagem com TypeScript  
Foi criada a interface `Tarefa` para garantir consistência:  

```tsx
export interface Tarefa {
  id: number;
  tarefa: string;
  selecionado: boolean;
  completado?: boolean;
}
```

---

## 🎨 Estilização com Tailwind e CSS  
O projeto utilizou **duas abordagens de estilo**:  
- **TailwindCSS** → aplicado em partes simples (ex: centralização, espaçamento, cores rápidas).  
- **CSS tradicional (`App.css`)** → usado para maior controle visual, como no layout da lista de tarefas.  

Exemplo (Tailwind dentro do JSX):  
```tsx
<div className="flex flex-col items-center justify-center min-h-screen">
  <h1 className="text-3xl font-bold text-green-600">To-Do List</h1>
</div>
```

Exemplo (CSS manual aplicado no projeto):  
```css
.task-list li {
  display: flex;
  justify-content: space-between;
  background: #2a2a2a;
  color: white;
}
```

---

## 🔄 Efeitos Colaterais (useEffect)  
Nesta versão, o **useEffect não foi usado**. Ele poderia ser aplicado futuramente, por exemplo, para salvar as tarefas no `localStorage` ou exibir logs sempre que a lista fosse alterada.  

```tsx
useEffect(() => {
  console.log("Lista atualizada:", tarefas);
}, [tarefas]);
```

---

## 🎭 Frustração com IA  
Seguir cegamente uma IA durante o desenvolvimento foi **um dos maiores bugs do processo**.  
As recomendações pareciam promissoras, mas na prática resultaram em:  
- Trechos de código que não rodavam.  
- Explicações incompletas.  
- Idas e vindas que atrasaram mais do que ajudaram.  

Esse README nasce justamente dessa experiência: **documentar bem o que foi feito vale mais do que tentar colar respostas prontas**.  
