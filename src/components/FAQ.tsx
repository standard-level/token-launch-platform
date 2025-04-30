'use client';

import { Plus } from 'lucide-react';
import { faqs } from '@/lib/constants';
import { Dispatch, SetStateAction, useState } from 'react';
import { FAQType } from '@/lib/types';

const FAQItem = ({
  content,
  open,
  setId,
}: {
  content: FAQType;
  open: boolean;
  setId: Dispatch<SetStateAction<number | null>>;
}) => {
  const handleClickFaq = () => {
    if (open) setId(null);
    else setId(content.id);
  };
  return (
    <div className='border-b border-gray-700 last:border-0 pb-2 last:pb-0'>
      <button className='flex w-full justify-between items-center' onClick={handleClickFaq}>
        <span className='text-gray-200 font-medium text-left'>{content.question}</span>
        <Plus
          width={20}
          height={20}
          className={`text-cyan-400 transform transition-transform ${open ? 'rotate-45' : 'rotate-0'}`}
        />
      </button>
      <div className={`transition-all transform ${open ? 'max-h-96 opacity-100 mt-0.5' : 'max-h-0 opacity-0 mt-0'}`}>
        <p className='text-gray-300 text-sm md:text-base'>{content.answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [id, setId] = useState<number | null>(null);
  return (
    <div className='container subtitle-animate bg-gray-800/50 backdrop-blur-xl rounded-2xl p-4 md:p-6 shadow-xl border border-gray-700'>
      <h2 className='subtitle-animate bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent text-2xl md:text-3xl font-bold mb-4 md:mb-6'>
        Frequently Asked Questions
      </h2>
      <div className='space-y-2'>
        {faqs.map((faq) => {
          return <FAQItem content={faq} key={faq.id} open={id === faq.id} setId={setId} />;
        })}
      </div>
    </div>
  );
};

export default FAQ;
