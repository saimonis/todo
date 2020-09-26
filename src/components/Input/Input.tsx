import React from 'react';

interface Input {
  type?: string;
  className?: string;
  onChange?: (e: any) => void;
}

export default function ({ type = 'text', className = '', onChange }: Input) {
  return (
    <>
      <input type={type} className={className} onChange={onChange} />
    </>
  );
}
