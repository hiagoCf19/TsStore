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

export const Cadastre = () => {
  const [userEmail, setUserEmail] = useState("");
  const [validado, setValidado] = useState(false);
  const regTestEmail: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const testResult: boolean = regTestEmail.test(userEmail);

  return (
    <section className="mx-8 sm:mx-[6.25rem] sm:flex sm:justify-center">
      <div className="flex flex-col  gap-6 border border-solid p-5 sm:w-[45rem]  sm:items-center ">
        <p className="text-center font-normal text-base text-[#212121d5] sm:text-lg">
          Quer receber nossas novidades, promoções exclusivas e 10% OFF na
          primeira compra? Cadastre-se
        </p>
        <div className="flex">
          <Input
            placeholder="Digite seu e-mail"
            type="text"
            className="border-[1px] border-solid border-[#0000008d] w-[12.5rem] sm:w-[18.75rem]"
            onChange={(e) => setUserEmail(e.target.value)}
            value={userEmail}
          />
          <AlertDialog>
            <AlertDialogTrigger
              className="bg-primary p-3 w-[100px] h-[40px] text-[#FFF]"
              onClick={() => {
                testResult ? setValidado(true) : setValidado(false);
              }}
            >
              Enviar
            </AlertDialogTrigger>
            {validado ? (
              <AlertDialogContent className="bg-[#FFF]">
                <AlertDialogHeader>
                  <AlertDialogTitle>Parabéns!</AlertDialogTitle>
                  <AlertDialogDescription>
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
                    Continuar
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            ) : (
              <AlertDialogContent className="bg-[#FFF]">
                <AlertDialogHeader>
                  <AlertDialogTitle>E-mail invalido</AlertDialogTitle>
                  <AlertDialogDescription>
                    Insira um e-mail válido para continuar o seu cadastro!
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogAction onClick={() => setUserEmail("")}>
                    Tentar novamente
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
