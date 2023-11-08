import { useEffect, useState } from "react";
import { LogButtonSM } from "../repetitivos/LogbuttonSM";
import { Input } from "../ui/input";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth, db } from "@/services/firebaseConfing";
import { addDoc, collection } from "firebase/firestore";

export const CadastroForm = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassWord] = useState<string>("");
  const [confirmPass, setConfirm] = useState<string>("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [userUID, setUserUID] = useState(user?.user.uid);
  console.log("UID está:", userUID);
  function cadastro(e: any) {
    e.preventDefault();
    createUserWithEmailAndPassword(email, password)
      .then((userCRED) => {
        const userUID = userCRED?.user.uid;

        const userCollection = collection(db, "usuarios");
        addDoc(userCollection, {
          uid: userUID,
          name: name,
          email: email,
        }).then(() => {
          console.log(
            "usuario cadastrado no firestore com o uid",
            userUID,
            "e nome",
            name,
            "."
          );
        });
      })
      .catch((erro) => {
        console.log("erro ao criar o usuario:", erro.message);
      });
  }

  useEffect(() => {
    if (user) {
      setUserUID(user.user.uid); // Armazena o uid do usuário no estado
    }
  }, [user]);

  if (user) {
    return (
      <div>
        <p>Registered User: {user.user.email}</p>
      </div>
    );
  }
  if (loading) {
    console.log("Verificando dados");
  }
  if (error) {
    if (error.message.includes("auth/weak-password")) {
      console.log("A senha deve ter pelo menos 6 caracteres");
    } else if (error.message.includes("auth/invalid-email")) {
      console.log("Email inválido");
    } else if (error.message.includes("auth/email-already-in-use")) {
      console.log("Email em uso");
    } else {
      console.log("Erro inesperado:", error.message);
    }
  }

  return (
    <form
      onSubmit={cadastro}
      className="flex justify-center flex-col items-center gap-3"
    >
      <div className="flex flex-col justify-start items-start gap-3">
        <label htmlFor="Nome">Nome</label>
        <Input
          placeholder="Informe seu nome"
          type="text"
          className=" bg-transp border-[1px] border-solid border-roxo shadow-md  w-[15.5rem] sm:w-[18.75rem] italic"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="flex flex-col justify-start items-start gap-3">
        <label htmlFor="Email">E-mail</label>
        <Input
          placeholder="informe seu e-mail"
          type="text"
          className=" bg-transp border-[1px] border-solid border-roxo shadow-md  w-[15.5rem] sm:w-[18.75rem] italic"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div className="flex flex-col justify-start items-start gap-3">
        <label htmlFor="Email">Senha</label>
        <Input
          placeholder="Defina uma senha"
          type="password"
          className=" bg-transp border-[1px] border-solid border-roxo shadow-md  w-[15.5rem] sm:w-[18.75rem] italic"
          value={password}
          onChange={(e) => {
            setPassWord(e.target.value);
          }}
        />
      </div>
      <div className="flex flex-col justify-start items-start gap-3">
        <label htmlFor="Confirme sua senha">Confirme sua senha</label>
        <Input
          placeholder="Confirme sua senha"
          type="password"
          className=" bg-transp border-[1px] border-solid border-roxo shadow-md  w-[15.5rem] sm:w-[18.75rem] italic"
          value={confirmPass}
          onChange={(e) => setConfirm(e.target.value)}
        />
      </div>

      <div className="py-5">
        <LogButtonSM type="submit" content="Cadastrar" />
      </div>
    </form>
  );
};
