'use client';

import { IconType } from 'react-icons';

interface PageSubTitleProp {
  icon: IconType;
  name?: string;
  totnumber?: string;
}
const PageSubTitle: React.FC<PageSubTitleProp> = ({
  icon: Icon,
  name,
  totnumber,
}) => {
  return (
    <div className="flex justify-between items-center py-4 border rounded-lg border-blue-600  text-blue-600 px-4 mx-2">
      <Icon className="hidden md:block h-6 w-6 text-gray-600 mx-4" />
      <h2 className="flex-1 text-xs sm:font-base">{name}</h2>
      <h1 className="text-lg pl-2">{totnumber}</h1>
    </div>
  );
};

export default PageSubTitle;
