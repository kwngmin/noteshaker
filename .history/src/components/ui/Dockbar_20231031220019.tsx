'use client';
import AddIcon from './ui/icons/AddIcon';
import Link from 'next/link';

export default function Dockbar() {
  return (
    <div className='h-16 flex items-center justify-between'>
      <Link href='/new'>
        <div>
          <AddIcon />
        </div>
      </Link>
    </div>
  );
}
