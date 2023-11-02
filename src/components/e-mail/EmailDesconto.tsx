import { useState } from "react";
import { Input } from "../ui/input";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { BotaoStyled } from "../UiVerse/BotaoStyled";
import { BotaoSM } from "../UiVerse/BotaoSMstyled";

export const Cadastre = () => {
  const [userEmail, setUserEmail] = useState("");
  const [validado, setValidado] = useState(false);
  const regTestEmail: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const testResult: boolean = regTestEmail.test(userEmail);

  return (
    <section className="mx-5 sm:mx-[6.25rem] sm:flex sm:justify-center ">
      <div className="flex flex-col  gap-6 border border-solid border-roxo p-5 sm:w-[45rem] sm:items-center rounded-lg ">
        <p className="text-center font-normal text-base text-[#a7a7a7] sm:text-lg">
          Quer receber nossas novidades, promoções exclusivas e 10% OFF na
          primeira compra? Cadastre-se
        </p>
        <div className="flex gap-2 ">
          <Input
            placeholder="Digite seu e-mail"
            type="text"
            className="border-[1px] border-solid border-roxo shadow-md  w-[12.5rem] sm:w-[18.75rem]"
            onChange={(e) => setUserEmail(e.target.value)}
            value={userEmail}
          />
          <AlertDialog>
            <AlertDialogTrigger
              className=" w-[100px] h-[40px] text-[#FFF]"
              onClick={() => {
                testResult ? setValidado(true) : setValidado(false);
              }}
            >
              <BotaoSM content="Enviar" />
            </AlertDialogTrigger>
            {validado ? (
              <AlertDialogContent className="bg-background border border-solid border-roxo w-[90%] rounded-lg shadow-roxo">
                <AlertDialogHeader>
                  <AlertDialogTitle>Parabéns!</AlertDialogTitle>
                  <AlertDialogDescription className="text-[#a7a7a7]">
                    Cadastro realizado com sucesso, em breve você receberá um
                    cupom para obter 10% de desconto em sua primeira compra!
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogAction
                    onClick={() => {
                      console.log(`E-mail cadastrado: ${userEmail}`);
                      setUserEmail("");
                    }}
                  >
                    <BotaoStyled content="Continuar" />
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            ) : (
              <AlertDialogContent className="bg-background border border-solid border-[#952323] w-[90%] rounded-lg shadow-[#952323] ">
                <AlertDialogHeader>
                  <AlertDialogTitle>E-mail invalido</AlertDialogTitle>
                  <AlertDialogDescription className="text-[#a7a7a7] text-base">
                    Insira um e-mail válido para continuar o seu cadastro!
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogAction onClick={() => setUserEmail("")}>
                    <BotaoSM content="Tentar novamente" />
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            )}
          </AlertDialog>
        </div>
      </div>
    </section>
  );
};
