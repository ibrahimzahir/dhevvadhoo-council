'use client';

interface HeadingProp {
  secHeading: string;
}

const SecHeading: React.FC<HeadingProp> = ({ secHeading }) => {
  return (
    <div className="flex max-auto items-center py-16 justify-center">
      <h1 className="bg-clip-text text-transparent bg-gradient-to-br from-[#0B9C9E] to-[#32C071] inline-block pt-4 pb-2 text-5xl">
        {secHeading}
      </h1>
    </div>
  );
};

export default SecHeading;
