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
    <div className="flex items-center border rounded-2xl py-3 sm:px-4 mx-2">
      <Icon className="h-6 w-6 mx-4 text-gray-600" />
      <h2 className="font-base">{name}</h2>
      <h1 className="px-2">{totnumber}</h1>
    </div>
  );
};

export default PageSubTitle;
