'use client';
import { signIn, useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const ButtonSocials = () => {
  const { status } = useSession();
  const router = useRouter();
  if (status === 'authenticated') {
    router.push('/');
  }
  return (
    <div className="flex items-center justify-center gap-8">
      <button onClick={() => signIn('google')}>
        <Image src="/google.png" alt="Google" width={30} height={30} />
      </button>
      <button>
        <Image src="/facebook.png" alt="Facebook" width={30} height={30} />
      </button>
      <button onClick={() => signIn('github')}>
        <Image src="/github.png" alt="Github" width={30} height={30} />
      </button>
    </div>
  );
};

export default ButtonSocials;
