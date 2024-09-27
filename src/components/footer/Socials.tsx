'use client';

import {
  ClockIcon,
  EnvelopeIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';

const Socials = () => {
  return (
    <div className="flex items-center gap-5 flex-wrap -mx-2 w-full">
      <div className="flex gap-1">
        <a
          href="https://www.facebook.com/sastodealonlineshopping"
          target="_blank"
          className="text-gray-700  p-1 flex items-center justify-center"
        >
          <ClockIcon className="h-6 w-6" />
        </a>
        <a
          href="https://www.instagram.com/sastodeal_/"
          target="_blank"
          className="text-gray-700 p-1 flex items-center justify-center"
        >
          <EnvelopeIcon className="h-6 w-6" />
        </a>
        <a
          href="https://twitter.com/SastoDeal"
          target="_blank"
          className="text-gray-700  p-1 flex items-center justify-center"
        >
          <PhoneIcon className="h-6 w-6" />
        </a>
      </div>
    </div>
  );
};

export default Socials;
