import React from "react";

interface props {
  title: string;
  isUnderline?: boolean;
}

const Title = ({ title, isUnderline }: props) => {
  return (
    <div className={`font-extrabold text-2xl ${isUnderline && "underline"}`}>
      {title}
    </div>
  );
};

export default Title;
