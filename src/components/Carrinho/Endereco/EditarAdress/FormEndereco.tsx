import UserCtx from "@/Context/UserCOntext";
import { RadioStyled } from "@/components/OpenProduct/tamanho";
import { StyledButtonSm } from "@/components/styledElements/BotaoSMstyled";

import { Input } from "@/components/ui/input";

import { Label } from "@radix-ui/react-label";

import { ChangeEvent, useContext, useEffect, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";

export const FormEndereco = () => {
  const { enderecoDoUsuario, setEnderecoDoUsuario } = useContext(UserCtx);
  const { nomeDoUsuario } = useContext(UserCtx);
  const [nome, setNome] = useState(nomeDoUsuario);
  const [sobrenome, setSobrenome] = useState<string>("");

  const [CEP, setCEP] = useState<string>("");
  const [CEPValido, setCEPValido] = useState<boolean>(false);
  const [CEPerror, setCEPerror] = useState<boolean>(false);

  const [rua, setRua] = useState<string>("");
  const [bairro, setBairro] = useState<string>("");
  const [cidade, setCidade] = useState<string>("");
  const [uf, setUf] = useState<string>("");
  const [complemento, setComplemento] = useState<string>("");
  const [numero, setNumero] = useState<string>("");
  const tipoDeEndereco: string[] = ["Casa", "Trabalho"];
  const [typeAdrs, setTypeAdrs] = useState<string>(tipoDeEndereco[0]);
  const [contato, setContato] = useState<string>("");

  const [saveData, setSaveData] = useState<boolean>(false);
  const mudaTipoDeEndereco = (type: any) => {
    setTypeAdrs(type);
  };
  useEffect(() => {
    console.log(enderecoDoUsuario);
  }, [enderecoDoUsuario]);
  useEffect(() => {
    if (CEP.length >= 8) {
      buscaCep();
    }
  }, [CEP]);
  const buscaCep = () => {
    const cepRefat = CEP.replace(/\D/g, "");

    fetch(`https://viacep.com.br/ws/${cepRefat}/json/`)
      .then((response) => response.json())
      .then((result) => {
        setCEPValido(true);
        setRua(result.logradouro);
        setBairro(result.bairro);
        setCidade(result.localidade);
        setUf(result.uf);
        console.log(result);
      })
      .catch((error) => {
        setCEPerror(true);

        console.log(error);
      });
  };
  useEffect(() => {
    SalvaDados();
  }, [enderecoDoUsuario]);
  const SalvaDados = () => {
    const parseString = JSON.stringify(enderecoDoUsuario);
    sessionStorage.setItem("Endereco", parseString);
  };
  console.log(CEPValido);
  return (
    <div className="sm:w-[40%] sm:h-max  bg-transp rounded-md overflow-hidden overflow-y-scroll p-4 pb-10  ">
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
            saveAdress: saveData,
          });

          console.log(enderecoDoUsuario);
        }}
      >
        {/* BLOCO NOME/SOBRENOME */}
        <div className="flex flex-col sm:flex-row sm:gap-8 gap-4 ">
          {/* NOME */}
          <div className="flex flex-col gap-2">
            <Label>Nome</Label>
            <Input
              className="bg-transp border-[1px] border-solid border-roxo shadow-md   sm:w-[18.75rem] italic rounded"
              type="text"
              placeholder="Insira seu nome"
              value={nome}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setNome(e.target.value)
              }
              required
            />
          </div>
          {/* SOBRENOME */}
          <div className="flex flex-col gap-2">
            <Label>Sobrenome</Label>
            <Input
              className="bg-transp border-[1px] border-solid border-roxo shadow-md   sm:w-[18.75rem] italic rounded"
              type="text"
              placeholder="Insira seu nome"
              value={sobrenome}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setSobrenome(e.target.value);
              }}
              required
            />
          </div>
        </div>

        {/* CEP & RUA  */}
        <div className="flex flex-col sm:flex-row sm:gap-8 gap-4 ">
          {/* CEP */}
          <div className="flex flex-col gap-2 relative">
            <Label>CEP</Label>
            <div className="w-full relative flex items-center gap-2">
              <Input
                className="bg-transp border-[1px] border-solid border-roxo shadow-md   sm:w-[18.75rem] italic rounded w-full "
                type="text"
                placeholder="busque seu CEP"
                value={CEP}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setCEP(e.target.value);
                }}
                required
              />
            </div>
            {CEPerror ? (
              <span className={` text-[#FF3333] `}>CEP inválido</span>
            ) : null}
          </div>
          {/*Rua */}
          <div className="flex flex-col gap-2">
            <Label>Rua</Label>
            <Input
              className="bg-transp border-[1px] border-dashed border-roxo shadow-md   sm:w-[18.75rem] italic rounded"
              type="text"
              placeholder="Insira seu endereço"
              value={rua}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setRua(e.target.value);
              }}
              required
            />
          </div>
        </div>
        {/* numero */}
        <div className="flex flex-col gap-2">
          <Label>Numero</Label>
          <Input
            className="bg-transp border-[1px] border-solid border-roxo shadow-md   sm:w-[18.75rem] italic rounded"
            type="text"
            placeholder="informe o número de sua residência"
            value={numero}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setNumero(e.target.value);
            }}
            required
          />
        </div>
        {/* COMPLEMENTO */}
        <div className="flex flex-col gap-2">
          <Label>Complemento (se necessário)</Label>
          <Input
            className="bg-transp border-[1px] border-solid border-roxo shadow-md   sm:w-[18.75rem] italic rounded"
            type="text"
            placeholder="Ex: ap-100"
            value={complemento}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setComplemento(e.target.value);
            }}
          />
        </div>
        {/* BLOCO CIDADE/BAIRRO */}
        <div className="flex flex-col sm:flex-row sm:gap-8 gap-4  ">
          {/* BAIRRO */}
          <div className="flex flex-col gap-2">
            <Label>Bairro</Label>
            <Input
              className="bg-transp border-[1px] border-dashed border-roxo shadow-md   sm:w-[18.75rem] italic rounded"
              type="text"
              placeholder="Insira seu bairro"
              value={bairro}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setBairro(e.target.value);
              }}
              required
            />
          </div>
          {/* CIDADE */}
          <div className=" flex gap-3">
            <div className="flex flex-col gap-2 w-[80%]">
              <Label>Cidade</Label>
              <Input
                className="bg-transp border-[1px] border-dashed border-roxo shadow-md  sm:w-[18.75rem] italic rounded"
                type="text"
                placeholder="Insira sua cidade"
                value={cidade}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setCidade(e.target.value);
                }}
                required
              />
            </div>
            <div className="flex flex-col gap-2 w-[20%]">
              <Label>UF</Label>
              <Input
                className="bg-transp border-[1px] border-dashed border-roxo shadow-md  sm:w-[18.75rem] italic rounded"
                type="text"
                placeholder="ex: MG"
                value={uf}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setUf(e.target.value);
                }}
                required
              />
            </div>
          </div>
        </div>
        {/* TELEFONE & COMPLEMENTO */}
        <div className="flex flex-col sm:flex-row sm:gap-8 gap-4 ">
          <div className="flex flex-col gap-2">
            <Label>Telefone de contato</Label>
            <Input
              className="bg-transp border-[1px] border-solid border-roxo shadow-md   sm:w-[18.75rem] italic rounded"
              type="text"
              placeholder=" (XX) X XXXXXXXX"
              value={contato}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setContato(e.target.value);
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
                    }}
                  />
                </RadioStyled>
                <Label>{type}</Label>
              </div>
            ))}
          </div>
          {/* salvar endereço */}
          <div className="flex gap-4 ml-2 pt-5">
            <Checkbox
              className="border-solid border-roxo w-5 h-5"
              onClick={() => {
                setSaveData(saveData === false ? true : false);
              }}
              checked={saveData === true}
            />
            Guardar dados para compras futuras
          </div>
        </div>
        <div className="flex justify-center sm:justify-end">
          <StyledButtonSm>
            <input
              type="submit"
              className="px-4 py-1 uppercase tracking-widest font-bold cursor-pointer "
              value={"Salvar"}
            />
          </StyledButtonSm>
        </div>
      </form>
    </div>
  );
};
