import { IconType } from "react-icons";
interface TopicoProps {
  title: string;
  text: string;
  icon: IconType;
}
export const Topico = ({ title, text, icon }: TopicoProps) => {
  return (
    <div className="flex mx-10 gap-5 sm:w-[19rem] sm:h-[4.5rem]">
      {icon({ size: 55, color: "#875cff" })}
      <div className=" flex flex-col gap-3 text-[#FFF]">
        <h3 className="text-[#875cff] font-semibold">{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};
