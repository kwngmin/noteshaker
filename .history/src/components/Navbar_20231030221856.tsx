'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AddIcon from './ui/icons/AddIcon';
import SearchIcon from './ui/icons/SearchIcon';
import ArrowDropDownIcon from './ui/icons/ArrowDropDownIcon';
// const menu=[{
//   href:'/', icon:, clickedIcon
// }]
export default function Navbar() {
  const pathName = usePathname();
  return (
    <div>
      <Link href='/search'>
        <div>
          <SearchIcon />
        </div>
      </Link>
      <Link href='/'>
        <h1>NoteShaker</h1>
        <ArrowDropDownIcon />
      </Link>
      <Link href='/new'>
        <div>
          <AddIcon />
        </div>
      </Link>
    </div>
  );
}
