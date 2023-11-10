'use client';
import { FullNote, SimpleNote } from '@/model/note';
import InputText from './InputText';
import useSWR from 'swr';

type Props = {
  note: SimpleNote;
};
export default function NoteDetail({ note }: Props) {
  const { id, notetitle, createdAt, comments } = note;
  const { data } = useSWR<FullNote>(`/api/notes/${id}`);
  return (
    <div>
      <InputText />
    </div>
  );
}
