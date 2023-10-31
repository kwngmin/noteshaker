'use client';
import { useSession, signIn, signOut } from 'next-auth/react';
export default function Loginbar() {
  return (
    <div
      role='button'
      onClick={() => signIn()}
      className='sticky bg-gray-50 hover:bg-gray-100 rounded-full bottom-4 w-56 h-12 mx-auto flex items-center justify-center select-none font-semibold cursor-pointer'
    >
      Sign in
    </div>
  );
}
