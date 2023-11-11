import { ReactNode, createContext, useState } from "react";
interface Children {
  children: ReactNode;
}

const ControlLog = createContext<any>({});

export function LogadoProvider({ children }: Children) {
  const token = sessionStorage.getItem("userUid");

  const [userLogado, setUserLogado] = useState<boolean>(token != null);

  return (
    <ControlLog.Provider value={{ userLogado, setUserLogado }}>
      {children}
    </ControlLog.Provider>
  );
}

export default ControlLog;
