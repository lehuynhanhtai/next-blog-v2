'use client';
import Loading from 'app/loading';
import { signIn, useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const ButtonSocials = () => {
  const { status } = useSession();
  const router = useRouter();
  if (status === 'loading') {
    return (
      <div className="absolute inset-0 flex items-center justify-center ">
        <Loading />
      </div>
    );
  }
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
