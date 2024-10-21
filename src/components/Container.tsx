'use client';

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div
      className="max-w-[2520px]
    mx-auto
    xl:px-48
    sm:px-10
    px-8"
    >
      {children}
    </div>
  );
};

export default Container;
