'use client';

interface HeadingProp {
  secHeading: string;
}

const SecHeading: React.FC<HeadingProp> = ({ secHeading }) => {
  return (
    <div className="flex max-auto py-10">
      <h1>{secHeading}</h1>
    </div>
  );
};

export default SecHeading;
