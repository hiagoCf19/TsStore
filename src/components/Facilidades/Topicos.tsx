import { IconType } from "react-icons";
interface TopicoProps {
  title: string;
  text: string;
  icon: IconType;
}
export const Topico = ({ title, text, icon }: TopicoProps) => {
  return (
    <div className="flex mx-10 gap-5">
      {icon({ size: 55, color: "#DAFF01" })}
      <div className=" flex flex-col gap-3 text-[#FFF]">
        <h3 className="text-[#DAFF01] font-semibold">{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};
