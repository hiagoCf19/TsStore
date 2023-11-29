import UserCtx from "@/Context/UserCOntext";
import { BackGrad } from "@/Styles/Background";
import { useContext, useEffect } from "react";

export const HomePay = () => {
  const { enderecoDoUsuario, setEnderecoDoUsuario } = useContext(UserCtx);
  useEffect(() => {
    // Recupera os dados do sessionStorage
    const dadosArmazenados = sessionStorage.getItem("Endereco");

    if (dadosArmazenados) {
      // Se houver dados armazenados, converte de volta para objeto e atualiza o estado
      const enderecoRecuperado = JSON.parse(dadosArmazenados);
      setEnderecoDoUsuario(enderecoRecuperado);
    }
  }, [setEnderecoDoUsuario]);

  // Restante do código do componente
  // ...

  return (
    <BackGrad>
      <div>{enderecoDoUsuario.rua}</div>
    </BackGrad>
  );
};
