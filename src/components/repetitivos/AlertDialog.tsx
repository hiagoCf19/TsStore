import { ReactNode } from "react";
import { CadastroForm } from "../Login&cadastro/Cadastro";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface PropsAlert {
  botao: ReactNode;

  title: string;
}
export const AlertMsg = ({ botao, title }: PropsAlert) => {
  return (
    <Dialog>
      <DialogTrigger>{botao}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="py-5 text-center">{title}</DialogTitle>
          <CadastroForm />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
