import UserCtx from "@/Context/UserCOntext";
import { RadioStyled } from "@/components/OpenProduct/tamanho";
import { StyledButtonSm } from "@/components/styledElements/BotaoSMstyled";

import { Input } from "@/components/ui/input";

import { Label } from "@radix-ui/react-label";

import { ChangeEvent, useContext, useEffect, useState } from "react";

export const FormEndereco = () => {
  const { enderecoDoUsuario, setEnderecoDoUsuario } = useContext(UserCtx);
  const { nomeDoUsuario } = useContext(UserCtx);
  const [nome, setNome] = useState(nomeDoUsuario);
  const [sobrenome, setSobrenome] = useState<string>("");
  const [sobrenomeValido, setSobrenomeValido] = useState<boolean>(false);

  const [CEP, setCEP] = useState<string>("");
  const [CEPValido, setCEPValido] = useState<boolean>(false);

  const [rua, setRua] = useState<string>("");
  const [ruaValida, setRuaValida] = useState<boolean>(false);

  const [bairro, setBairro] = useState<string>("");
  const [bairroValido, setBairroValido] = useState<boolean>(false);

  const [cidade, setCidade] = useState<string>("");
  const [cidadeValida, setCidadeValida] = useState<boolean>(false);

  const [complemento, setComplemento] = useState<string>("");
  const [complementoValido, setComplementoValido] = useState<boolean>(true);

  const tipoDeEndereco: string[] = ["Casa", "Trabalho"];
  const [typeAdrs, setTypeAdrs] = useState<string>(tipoDeEndereco[0]);

  const [contato, setContato] = useState<string>("");
  const [contatoValido, setContatoValido] = useState<boolean>(false);

  const [validForm, setValidForm] = useState<boolean>(false);

  const mudaTipoDeEndereco = (type: any) => {
    setTypeAdrs(type);
  };
  useEffect(() => {
    console.log(enderecoDoUsuario);
  }, [enderecoDoUsuario]);

  return (
    <div className="sm:w-[40%] sm:h-max  bg-transp rounded-md overflow-hidden overflow-y-scroll p-4 pb-10 ">
      <h1 className="uppercase tracking-wide font-semibold sm:flex  sm:text-[18px] sm:mb-4 text-[16px]">
        Endereço de entrega
      </h1>
      <form
        className="flex flex-col gap-5 px-6 py-4"
        onSubmit={(e) => {
          e.preventDefault();
          setEnderecoDoUsuario({
            nome: nome,
            sobrenome: sobrenome,
            CEP: CEP,
            tipoDeEndereco: typeAdrs,
            rua: rua,
            bairro: bairro,
            cidade: cidade,
            complemento: complemento,
            contato: contato,
          });
          setValidForm(
            sobrenomeValido &&
              CEPValido &&
              ruaValida &&
              complementoValido &&
              bairroValido &&
              cidadeValida &&
              contatoValido
              ? true
              : false
          );
          console.log(enderecoDoUsuario);
          console.log(validForm);
        }}
      >
        {/* BLOCO NOME/SOBRENOME */}
        <div className="flex flex-col sm:flex-row sm:gap-8 gap-4 ">
          {/* NOME */}
          <div className="flex flex-col gap-2">
            <Label>Nome</Label>
            <Input
              className="bg-transp border-[1px] border-solid border-roxo shadow-md  w-[15.5rem] sm:w-[18.75rem] italic rounded"
              type="text"
              placeholder="Insira seu nome"
              value={nome}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setNome(e.target.value)
              }
            />
          </div>
          {/* SOBRENOME */}
          <div className="flex flex-col gap-2">
            <Label>Sobrenome</Label>
            <Input
              className="bg-transp border-[1px] border-solid border-roxo shadow-md  w-[15.5rem] sm:w-[18.75rem] italic rounded"
              type="text"
              placeholder="Insira seu nome"
              value={sobrenome}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setSobrenome(e.target.value);
                setSobrenomeValido(sobrenome.length >= 1 ? true : false);
              }}
            />
          </div>
        </div>

        {/* CEP & RUA  */}
        <div className="flex flex-col sm:flex-row sm:gap-8 gap-4 ">
          {/* CEP */}
          <div className="flex flex-col gap-2">
            <Label>CEP</Label>
            <Input
              className="bg-transp border-[1px] border-solid border-roxo shadow-md  w-[15.5rem] sm:w-[18.75rem] italic rounded"
              type="text"
              placeholder="Insira seu CEP"
              value={CEP}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setCEP(e.target.value);
                setCEPValido(CEP.length >= 1 ? true : false);
              }}
            />
          </div>
          {/*Rua */}
          <div className="flex flex-col gap-2">
            <Label>Rua</Label>
            <Input
              className="bg-transp border-[1px] border-dashed border-roxo shadow-md  w-[15.5rem] sm:w-[18.75rem] italic rounded"
              type="text"
              placeholder="Insira seu endereço"
              value={rua}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setRua(e.target.value);
                setRuaValida(rua.length >= 1 ? true : false);
              }}
            />
          </div>
        </div>
        {/* BLOCO CIDADE/BAIRRO */}
        <div className="flex flex-col sm:flex-row sm:gap-8 gap-4  ">
          {/* BAIRRO */}
          <div className="flex flex-col gap-2">
            <Label>Bairro</Label>
            <Input
              className="bg-transp border-[1px] border-dashed border-roxo shadow-md  w-[15.5rem] sm:w-[18.75rem] italic rounded"
              type="text"
              placeholder="Insira seu bairro"
              value={bairro}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setBairro(e.target.value);
                setBairroValido(bairro.length >= 1 ? true : false);
              }}
            />
          </div>
          {/* CIDADE */}
          <div className="flex flex-col gap-2">
            <Label>Cidade</Label>
            <Input
              className="bg-transp border-[1px] border-dashed border-roxo shadow-md  w-[15.5rem] sm:w-[18.75rem] italic rounded"
              type="text"
              placeholder="Insira sua cidade"
              value={cidade}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setCidade(e.target.value);
                setCidadeValida(cidade.length >= 1 ? true : false);
              }}
            />
          </div>
        </div>
        {/* TELEFONE & COMPLEMENTO */}
        <div className="flex flex-col sm:flex-row sm:gap-8 gap-4 ">
          <div className="flex flex-col gap-2">
            <Label>Telefone de contato</Label>
            <Input
              className="bg-transp border-[1px] border-solid border-roxo shadow-md  w-[15.5rem] sm:w-[18.75rem] italic rounded"
              type="text"
              placeholder=" (XX) X XXXXXXXX"
              value={contato}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setContato(e.target.value);
                setContatoValido(contato.length >= 1 ? true : false);
              }}
            />
          </div>
          {/* COMPLEMENTO */}
          <div className="flex flex-col gap-2">
            <Label>Complemento</Label>
            <Input
              className="bg-transp border-[1px] border-solid border-roxo shadow-md  w-[15.5rem] sm:w-[18.75rem] italic rounded"
              type="text"
              placeholder="informe um complemento"
              value={complemento}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setComplemento(e.target.value);
                setComplementoValido(complemento.length >= 1 ? true : false);
              }}
            />
          </div>
        </div>
        {/* TIPO DE ENDEREÇO */}
        <div className="flex flex-col justify-center gap-2">
          <Label>Tipo de endereço</Label>
          <div className="flex">
            {tipoDeEndereco.map((type: string, i: number) => (
              <div className="flex items-center outline-none " key={i}>
                <RadioStyled>
                  <input
                    type="radio"
                    className="input"
                    id={type}
                    checked={typeAdrs === type}
                    onChange={() => {
                      mudaTipoDeEndereco(type);
                      setValidForm(
                        sobrenomeValido &&
                          CEPValido &&
                          ruaValida &&
                          complementoValido &&
                          bairroValido &&
                          cidadeValida &&
                          contatoValido
                          ? true
                          : false
                      );
                    }}
                  />
                </RadioStyled>
                <Label>{type}</Label>
              </div>
            ))}
          </div>
        </div>

        <StyledButtonSm>
          <input
            type="submit"
            className="px-4 py-1 uppercase tracking-widest font-bold cursor-pointer "
            value={"Salvar"}
          />
        </StyledButtonSm>
      </form>
    </div>
  );
};
