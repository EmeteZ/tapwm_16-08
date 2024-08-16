import Produto from "../Produto";

const ListaDeProdutos = ({ produtos }) => {
  return (
    <div>
      {" "}
      {produtos.map((p) => (
        <Produto valor={p}></Produto>
      ))}
    </div>
  );
};

export default ListaDeProdutos;
