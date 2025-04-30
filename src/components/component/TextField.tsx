import { TokenMetaDataType } from '@/lib/types';
import { ChangeEvent, Dispatch, ReactNode, SetStateAction } from 'react';

const TextField = ({
  label,
  placeholder,
  name,
  value,
  setTokenMetaData,
  helperText,
  type = 'text',
  children,
  min,
  max,
}: {
  label?: string;
  type?: string;
  placeholder?: string;
  name?: string;
  value: string | number | undefined;
  helperText?: string;
  children?: ReactNode;
  min?: number;
  max?: number;
  setTokenMetaData: Dispatch<SetStateAction<TokenMetaDataType>>;
}) => {
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    if ((min || max) && isNaN(Number(e.target.value))) {
      return;
    }
    if (min && Number(e.target.value) < min) {
      return;
    }
    if (max && Number(e.target.value) > max) {
      return;
    }

    setTokenMetaData((prev) => {
      return { ...prev, [e.target.name]: e.target.value } as TokenMetaDataType;
    });
  }
  return (
    <div>
      {label && <label className='block text-gray-300 text-sm font-medium mb-2'>{label}</label>}
      {children}
      <input
        className='w-full bg-gray-700/50 border border-gray-600 rounded-lg px-3 md:px-4 py-2 md:py-2.5 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition'
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
      {helperText && <label className='text-gray-500 text-xs mt-1'>{helperText}</label>}
    </div>
  );
};

export default TextField;
