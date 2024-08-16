import "./App.css";
import ListaDeProdutos from "./Componentes/ListaDeProdutos";

const produtos = [
  {
    nome: "Fortnite",
    preco: 10.0,
  },
  {
    nome: "Minecraft",
    preco: 20.0,
  },
];

function App() {
  return (
    <div>
      <h1>Lista Produtos</h1>
      <ListaDeProdutos produtos={produtos} />
    </div>
  );
}

export default App;
