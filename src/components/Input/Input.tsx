import React from 'react';

export default function ({ type = 'text', className = '' }) {
  return (
    <>
      <input type={type} className={className} />
    </>
  );
}
