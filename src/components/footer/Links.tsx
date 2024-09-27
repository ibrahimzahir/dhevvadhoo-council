'use client';

import Link from 'next/link';

const Links = () => {
  return (
    <div className="flex flex-wrap -mx-2 mb-2">
      {links.map(({ id, heading, linkss }) => {
        return (
          <div key={id} className="w-1/2 text-sm">
            <h3 className="uppercase text-dark-color text-base mb-5 leading-[1.24rem] font-bold">
              {heading}
            </h3>
            <ul>
              {linkss.map(({ id, value, link }) => {
                return (
                  <li key={id} className="mb-2">
                    <Link
                      href={link}
                      className="text-dark-color hover:text-primary-color"
                    >
                      {value}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Links;

interface Ilink {
  id: number;
  value: string;
  link: string;
}

interface Ilinks {
  id: number;
  heading: string;
  linkss: Ilink[];
}

const links: Ilinks[] = [
  {
    id: 1,
    heading: 'Useful Links',
    linkss: [
      {
        id: 1,
        value: 'President Office',
        link: 'https://presidency.gov.mv/',
      },
      {
        id: 2,
        value: 'GAZATTE',
        link: 'https://www.gazette.gov.mv/',
      },
      {
        id: 3,
        value: 'LGA',
        link: 'https://www.lga.gov.mv/',
      },
      {
        id: 4,
        value: 'CSC',
        link: 'https://www.csc.gov.mv/',
      },
      {
        id: 5,
        value: 'MIRA',
        link: 'https://www.mira.gov.mv/',
      },
    ],
  },
  {
    id: 2,
    heading: 'Sastodeal',
    linkss: [
      {
        id: 1,
        value: 'About Us',
        link: '',
      },
      {
        id: 2,
        value: 'Careers @ SD',
        link: '',
      },
      {
        id: 3,
        value: 'Advertise on SD',
        link: '',
      },
      {
        id: 4,
        value: 'Sell on SD',
        link: '',
      },
    ],
  },
];
