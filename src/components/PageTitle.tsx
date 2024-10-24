'use client';

interface TitleProp {
  pageTitle: string;
}

const PageTitle: React.FC<TitleProp> = ({ pageTitle }) => {
  return (
    <div className="flex max-auto items-center justify-center py-16">
      <h1 className="bg-clip-text text-transparent bg-gradient-to-br from-[#3474ff] to-[#002e90] inline-block pt-4 pb-2 text-6xl text-center">
        {pageTitle}
      </h1>
    </div>
  );
};

export default PageTitle;
