import React from "react";
import { Newspaper } from "lucide-react";

const Nav = () => {
  return (
    <div className="flex p-4 items-center gap-2">
      <h1 className="font-bold text-2xl underline cursor-pointer">InfoBrief</h1>
      <Newspaper />
    </div>
  );
};

export default Nav;
