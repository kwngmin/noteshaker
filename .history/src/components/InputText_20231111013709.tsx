import { useEffect, useRef } from 'react';
import RoundIcon from './ui/icons/RoundIcon';
type Props = {
  openInput?: boolean;
};
export default function InputText({ openInput }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (inputRef.current !== null) {
      inputRef.current.disabled = false;
      inputRef.current.focus();
      inputRef.current.scrollIntoView({ block: 'center' });
    }
  }, [openInput]);

  return (
    <form action='' className='py-2'>
      <div className='flex items-center py-1 px-2 ring-1 ring-slate-300 bg-slate-50 rounded-xl gap-2 focus-within:ring focus-within:ring-emerald-500'>
        <input
          className='grow rounded p-1 focus:border-none focus:outline-none bg-transparent text-sm'
          type='text'
          placeholder='send message...'
          ref={inputRef}
        />
        <button className='w-7 h-7 flex justify-center items-center rounded-full text-sm font-medium bg-gray-700'>
          <RoundIcon name='arrow_right_alt' filled style='text-white' />
        </button>
      </div>
    </form>
  );
}
