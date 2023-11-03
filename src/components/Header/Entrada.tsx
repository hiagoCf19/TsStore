import { User } from "lucide-react";

import { Link } from "react-router-dom";

export const Entradas = () => {
  return (
    <div className=" hidden sm:block">
      <div className="text-white flex gap-5 items-center">
        <Link to={"/login"} className="flex items-center gap-3 font-semibold">
          <User color="#725cff" />
          Login
        </Link>
      </div>
    </div>
  );
};
