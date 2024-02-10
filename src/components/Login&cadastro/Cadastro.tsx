import { useEffect, useState } from "react";

import { Input } from "../ui/input";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth, db } from "@/services/firebaseConfing";
import { collection, doc, setDoc } from "firebase/firestore";
import { LogButtonSM } from "../styledElements/LogbuttonSM";
import { Eye, EyeOff } from "lucide-react";

export const CadastroForm = () => {
  {
    /* STATES */
  }

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassWord] = useState<string>("");
  const [validConfirm, setValidConfirm] = useState<boolean>(false);
  const [visiblePassword, setVisiblePassword] = useState<boolean>(false);
  const [visibleConfirm, setVisibleConfirm] = useState<boolean>(false);
  const [msgPass, setMsgPass] = useState<boolean>(false);
  const [confirmPass, setConfirm] = useState<string>("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [userUID, setUserUID] = useState(user?.user.uid);

  {
    /* mostrando UID no console quando existir */
  }
  userUID !== undefined ? console.info("UID está:", userUID) : null;
  {
    /* AUTENTICANDO USUARIO NO FIREBASE VIA LOG E SENHA E GUARDANDO SEUS DADOS NO FIRESTORE */
  }
  function cadastro(e: any) {
    e.preventDefault();
    createUserWithEmailAndPassword(email, password)
      .then((userCRED) => {
        const userUID = userCRED?.user.uid;

        const userCollection = collection(db, "usuarios");
        const userDocRef = doc(userCollection, userUID);
        setDoc(userDocRef, {
          uid: userUID,
          name: name,
          email: email,
        }).then(()=>{
console.info(`Usuario cadastrado com o uid: ${userUID} e nome: ${name}`)
})
      .catch((erro) => {
        console.log("erro ao criar o usuario:", erro.message);
      });
  }
  {
    /* SEMPRE QUE UM CADASTRO FOR BEM SUCEDIDO O ESTADO DE UID SERÁ ATUALIZADO, OU SEJA, SERÁ O UID DO USUARIO QUE ACABOU DE SE CADASTRAR */
  }
  useEffect(() => {
    if (user) {
      setUserUID(user.user.uid); // Armazena o uid do usuário no estado
    }
  }, [user]);
  {
    /* O QUE ACONTECE QUANDO O CADASTRO É BEM SUCEDIDO: */
  }
  if (user) {
    return (
      <div>
        <p className="text-xl">
          Seja bem vindo {name}. Feche esta aba para realizar o login
        </p>
      </div>
    );
  }
  {
    /* O QUE ACONTECE ENQUANTO SE VERIFICA SE O CADASTRO PODE SER REALIZADO */
  }
  if (loading) {
    console.info("Verificando dados");
  }
  {
    /* O QUE ACONTECE EM CASO DE ERRO */
  }
  if (error) {
    console.log(error.message);
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        validConfirm ? cadastro(e) : setMsgPass(true);
      }}
      className="flex justify-center flex-col items-center gap-3"
    >
      <div className="flex flex-col justify-start items-start gap-3">
        <label className="font-bold text-[1rem]" htmlFor="Nome">
          Nome
        </label>
        <Input
          placeholder="Informe seu nome"
          type="text"
          className=" bg-transp border-[1px] border-solid border-roxo shadow-md  w-[15.5rem] sm:w-[18.75rem] italic"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          required
        />
      </div>
      {/* INPUT EMAIL */}
      <div className="flex flex-col justify-start items-start gap-3">
        <label className="font-bold text-[1rem]" htmlFor="Email">
          E-mail
        </label>
        <Input
          placeholder="informe seu e-mail"
          type="text"
          className={` bg-transp border-[1px] border-solid ${
            error?.message === "Firebase: Error (auth/missing-email)." ||
            error?.message === "Firebase: Error (auth/email-already-in-use)."
              ? "border-[#D80032]"
              : "border-roxo"
          } shadow-md  w-[15.5rem] sm:w-[18.75rem] italic`}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        {error === undefined ? (
          ""
        ) : (
          <span className="text-[#D80032]">
            {error?.message === "Firebase: Error (auth/missing-email)." ||
            error.message === "Firebase: Error (auth/invalid-email)."
              ? "Insira um e-mail vido"
              : error?.message ===
                "Firebase: Error (auth/email-already-in-use)."
              ? "E-mail já cadastrado"
              : ""}
          </span>
        )}
      </div>
      {/* INPUT SENHA */}
      <div className="flex flex-col justify-start items-start gap-3">
        <label className="font-bold text-[1rem]" htmlFor="Email">
          Senha
        </label>
        <div className="flex relative">
          <Input
            placeholder="Defina uma senha"
            type={visiblePassword ? "text" : "password"}
            className={` bg-transp border-[1px] border-solid border-roxo shadow-md pr-10  w-[15.5rem] sm:w-[18.75rem] italic ${
              msgPass ? "border-[#D80032]" : "border-roxo"
            }`}
            value={password}
            onChange={(e) => {
              setPassWord(e.target.value);
            }}
          />

          <span
            className="absolute top-[25%] bottom-[50%] right-3"
            onClick={() =>
              !visiblePassword
                ? setVisiblePassword(true)
                : setVisiblePassword(false)
            }
          >
            {visiblePassword ? (
              <EyeOff size={20} color="#725cff" />
            ) : (
              <Eye size={20} color="#725cff" />
            )}
          </span>
        </div>
        {error === undefined ? (
          ""
        ) : (
          <span className="text-[#D80032] text-sm sm:text-[1rem] ">
            {error?.message === "Firebase: Error (auth/missing-password)."
              ? "Insira uma senha"
              : error?.message ===
                "Firebase: Password should be at least 6 characters (auth/weak-password)."
              ? "A senha precisa ter mais de 6 digitos"
              : ""}
          </span>
        )}
      </div>
      <div className="flex flex-col justify-start items-start gap-3">
        <label className="font-bold text-[1rem]" htmlFor="Confirme sua senha">
          Confirme sua senha
        </label>
        <div className="flex relative">
          <Input
            placeholder="Confirme sua senha"
            type={visibleConfirm ? "text" : "password"}
            className={` bg-transp border-[1px] border-solid  shadow-md pr-10  w-[15.5rem] sm:w-[18.75rem] italic  ${
              msgPass ? "border-[#D80032]" : "border-roxo"
            }
            `}
            value={confirmPass}
            onChange={(e) => {
              setConfirm(e.target.value);
            }}
          />
          <span
            className="absolute top-[25%] bottom-[50%] right-3"
            onClick={() =>
              !visibleConfirm
                ? setVisibleConfirm(true)
                : setVisibleConfirm(false)
            }
          >
            {visibleConfirm ? (
              <EyeOff size={20} color="#725cff" />
            ) : (
              <Eye size={20} color="#725cff" />
            )}
          </span>
        </div>
      </div>

      <div
        onClick={() =>
          confirmPass.length >= 1 && confirmPass === password
            ? setValidConfirm(true)
            : null
        }
      >
        <LogButtonSM type="submit" content="Cadastrar" />
      </div>
    </form>
  );
};
