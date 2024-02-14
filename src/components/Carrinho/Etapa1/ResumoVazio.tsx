export const ResumoVazio = () => {
  return (
    <>
      <div
        className={` sm:w-[25%] bg-transp overflow-hidden rounded-lg h-min  `}
      >
        <h1 className="p-4 text-lg font-semibold border-b border-solid border-roxo hidden sm:block">
          Resumo do pedido
        </h1>
        <div className="p-4 text-[#a7a7a7]">
          Aqui, você encontrará os valores da sua compra assim que adicionar
          produtos
        </div>
      </div>
    </>
  );
};
