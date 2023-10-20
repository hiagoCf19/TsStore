import { ProdutosInterface } from "@/Context/contextProdutos";

export const ProdutoExibido = ({
  nome,
  price,
  descricao,
  image,
}: ProdutosInterface) => {
  return (
    <div>
      <p>Nome: {nome}</p>
      <p>Descricao: {descricao}</p>
      <p>price: {price}</p>
      <img src={image} alt={nome} />
    </div>
  );
};
