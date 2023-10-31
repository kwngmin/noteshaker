'use client';
import Dockbar from './Dockbar';
import { useSession, signIn, signOut } from 'next-auth/react';
import Loginbar from './Loginbar';

export default function Footer() {
  const { data: session } = useSession();
  if (session) return <Loginbar />;
  else
    return (
      <footer className='sticky bottom-0 w-full max-w-screen-md mx-auto'>
        <Dockbar />
      </footer>
    );
}
