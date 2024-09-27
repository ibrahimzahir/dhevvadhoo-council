'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      onClick={() => router.push('/')}
      className="hidden
          md:block
          cursor-pointer py-2"
      src="/images/council-logo.jpeg"
      alt="logo"
      height={90}
      width={90}
    />
  );
};

export default Logo;
