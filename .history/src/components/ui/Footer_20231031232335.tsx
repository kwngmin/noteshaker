import Dockbar from './Dockbar';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Footer() {
  return (
    <footer className='sticky bottom-0 w-full max-w-screen-md mx-auto'>
      <Dockbar />
    </footer>
  );
}
