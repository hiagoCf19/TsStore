import { BackGrad } from "@/Styles/Background";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";

import { ResumoComItem } from "../../Etapa1/resumoComItem";
import { DeliveryOption } from "./OpcaoDoUser";
import { useContext, useEffect, useState } from "react";
import UserCtx from "@/Context/UserCOntext";
import "animate.css";
export const VisualizaEnd = () => {
  const { enderecoDoUsuario, setEnderecoDoUsuario } = useContext(UserCtx);
  const [enderecoExiste, setEnderecoExiste] = useState(false);
  useEffect(() => {
    // Recupera os dados do sessionStorage
    const dadosArmazenados = sessionStorage.getItem("Endereco");

    if (dadosArmazenados) {
      // Se houver dados armazenados, converte de volta para objeto e atualiza o estado
      const enderecoRecuperado = JSON.parse(dadosArmazenados);
      setEnderecoDoUsuario(enderecoRecuperado);
      setEnderecoExiste(
        enderecoRecuperado.hasOwnProperty("CEP") ? true : false
      );
    }
  }, [setEnderecoDoUsuario]);
  const bases = [
    {
      title: "Entrega via correios",
      span: !enderecoExiste
        ? "Cadastre um endereço  para receber seu pedido"
        : `Enviar para ${enderecoDoUsuario.rua} ${enderecoDoUsuario.numero}, ${enderecoDoUsuario.bairro}. ${enderecoDoUsuario.cidade}-${enderecoDoUsuario.uf} `,
      custo: "5 a 10 dias úteis",
    },
    {
      title: "Retirada na loja",
      span: "Retire seu produto em uma de nossas lojas",
      custo: "1 dia útil",
    },
  ];
  const [typeEntrega, settypeEntrega] = useState<string>(bases[0].title);
  const TipoDeEntrega = (type: any) => {
    settypeEntrega(type);
  };
  console.log(enderecoExiste);
  return (
    <BackGrad>
      <section className="animate__animated animate__fadeIn">
        <div className="fixed bg-transp2 w-full z-50">
          <Header
            line={""}
            props={
              <div className="sm:bg-transp px-2 sm:h-10 flex items-center justify-between w-full">
                <img
                  src="Assets/tsStore.svg"
                  alt="logo"
                  className=" w-[90px] sm:w-[110px] "
                />
              </div>
            }
          />
        </div>
        <div className="h-[50px] w-full bg-transp"></div>

        <div className="w-full flex justify-center flex-col aanimate__animated animate__fadeInt ">
          <div className="flex justify-center sm:pt-16  sm:h-[50vh]   sm:gap-5 gap-3 sm:mx-5 mx-2 flex-col sm:flex-row  py-5">
            <div className="sm:w-[40%] sm:h-max  bg-transp rounded-md overflow-hidden overflow-y-scroll p-4 pb-10  ">
              <DeliveryOption
                typeEntrega={typeEntrega}
                bases={bases}
                TipoDeEntrega={TipoDeEntrega}
              />
            </div>

            <ResumoComItem
              rotaDoContinue={
                typeEntrega === "Entrega via correios"
                  ? enderecoExiste
                    ? "/metodos-de-pagamento"
                    : "/cadastre-seu-endereco"
                  : "/metodos-de-pagamento"
              }
            />
          </div>
        </div>
      </section>

      <div className="sm:absolute fixed bottom-0 w-full">
        <Footer />
      </div>
    </BackGrad>
  );
};
