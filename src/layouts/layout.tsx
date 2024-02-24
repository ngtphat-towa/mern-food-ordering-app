import Header from "@/components/Header";
import React from "react";

type Props = {
  children?: React.ReactNode;
};
const layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="containter mx-auto flex-1 py-10">{children}</div>
    </div>
  );
};

export default layout;
