import React from "react";
interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

function Container({ children, className = "" }: ContainerProps) {
  return (
    <div
      className={`mx-auto max-w-6xl w-full px-5 sm:px-8 md:px-14 lg:px-5 ${className} `}
    >
      {children}
    </div>
  );
}

export default Container;
