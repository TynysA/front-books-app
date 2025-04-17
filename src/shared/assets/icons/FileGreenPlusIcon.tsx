import { SVGProps } from 'react';
import { JSX } from 'react/jsx-runtime';

export default function FileGreenPlusIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      className='ours'
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
    >
      <path
        d='M18.8421 12.998H12.9885V18.998H11.0373V12.998H5.18359V10.998H11.0373V4.99805H12.9885V10.998H18.8421V12.998Z'
        fill='#4F9D3A'
      />
    </svg>
  );
}
