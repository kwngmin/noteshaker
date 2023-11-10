'use client';

import { PulseLoader } from 'react-spinners';
import useSWR from 'swr';
import { FullNote, SimpleNote } from '@/model/note';
import NotePost from './NotePost';
// import LazySpinner from './lazySpinner';

export default function NoteList() {
  const { data: notes, isLoading: loading } =
    useSWR<SimpleNote[]>('/api/notes');

  return (
    <ul>
      {loading && (
        <li className='w-full flex items-center justify-center h-36'>
          {/* <LazySpinner /> */}
          <PulseLoader size={10} color='gray' />
        </li>
      )}
      {notes &&
        notes.map(note => (
          <li key={note.id}>
            <NotePost note={note} />
          </li>
        ))}
    </ul>
  );
}
