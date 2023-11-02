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

import { ReactNode } from "react";
import { LogButton } from "./Logbutton";
interface PropsAlert {
  botao: ReactNode;
  AlertMensage: string;
  title: string;
}
export const AlertMsg = ({ botao, AlertMensage, title }: PropsAlert) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger>{botao}</AlertDialogTrigger>

      <AlertDialogContent className="bg-transp border border-solid border-[#725cff] w-[90%] rounded-lg shadow-[#725cff] ">
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription className="text-[#a7a7a7] text-base">
            {AlertMensage}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction>
            <LogButton content="Entendo" />
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
