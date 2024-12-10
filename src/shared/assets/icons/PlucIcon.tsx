import { SVGProps } from 'react';
import { JSX } from 'react/jsx-runtime';

export default function PlucIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M13.8512 4.85493C13.8512 3.83048 13.0228 3 12.0008 3C10.9789 3 10.1504 3.83048 10.1504 4.85493V19.1451C10.1504 20.1695 10.9789 21 12.0008 21C13.0228 21 13.8512 20.1695 13.8512 19.1451V4.85493Z'
        fill='#4EBC73'
      />
      <path
        d='M4.85493 10.1488C3.83048 10.1488 3 10.9772 3 11.9992C3 13.0211 3.83048 13.8496 4.85493 13.8496L19.1451 13.8496C20.1695 13.8496 21 13.0211 21 11.9992C21 10.9772 20.1695 10.1488 19.1451 10.1488H4.85493Z'
        fill='url(#paint0_linear_45761_2119)'
      />
      <defs>
        <linearGradient
          id='paint0_linear_45761_2119'
          x1='3'
          y1='12.0037'
          x2='21'
          y2='12.0037'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#4EBC73' stopOpacity='0.4' />
          <stop offset='1' stopColor='#4EBC73' />
        </linearGradient>
      </defs>
    </svg>
  );
}
