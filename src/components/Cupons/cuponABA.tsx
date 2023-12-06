import { Allcupons } from "./Home";

interface CuponABAProps {
  cupons: Allcupons[];
}

export const CuponABA = ({ cupons }: CuponABAProps) => {
  return (
    <div className="bg-transp rounded-md w-full flex p-4">
      {cupons.map((cup: Allcupons, i: number) => (
        <div key={i}>
          {cup.category}
          {cup.icon}
        </div>
      ))}
    </div>
  );
};
