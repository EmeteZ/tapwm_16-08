import logo from './logo.svg';
import './App.css';
import ListaProdutos from './Componentes/ListaProdutos';

const produtos = [{
  nome:"Fortnite",
  preco: 10.00,
  },
  {
    nome:"Free Fire",
    preco: 2.00,
    },
];

function App() {
  return (
  <div>
    <h1>Lista Produtos</h1>
    <ListaProdutos produtos={produtos}/>
  </div>
  );
}

export default App;