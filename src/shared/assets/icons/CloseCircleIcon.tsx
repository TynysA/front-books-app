import { SVGProps } from 'react';
import { JSX } from 'react/jsx-runtime';

export default function CloseCircleIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <g filter='url(#filter0_b_2_9025)'>
        <rect width='20' height='20' rx='10' fill='#AEAEB2' />
        <path
          d='M6.69954 12.7876C6.49219 12.9949 6.48796 13.3631 6.70378 13.5789C6.92383 13.7947 7.29199 13.7905 7.49512 13.5874L10.0003 11.0822L12.5013 13.5831C12.7129 13.7947 13.0768 13.7947 13.2926 13.5789C13.5085 13.3589 13.5085 12.9991 13.2969 12.7876L10.7959 10.2866L13.2969 7.78138C13.5085 7.56979 13.5127 7.20586 13.2926 6.99003C13.0768 6.77421 12.7129 6.77421 12.5013 6.9858L10.0003 9.48678L7.49512 6.9858C7.29199 6.77845 6.9196 6.76998 6.70378 6.99003C6.48796 7.20586 6.49219 7.57825 6.69954 7.78138L9.20052 10.2866L6.69954 12.7876Z'
          fill='white'
        />
      </g>
      <defs>
        <filter
          id='filter0_b_2_9025'
          x='-43.4925'
          y='-43.4925'
          width='106.985'
          height='106.985'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feGaussianBlur in='BackgroundImageFix' stdDeviation='21.7463' />
          <feComposite in2='SourceAlpha' operator='in' result='effect1_backgroundBlur_2_9025' />
          <feBlend mode='normal' in='SourceGraphic' in2='effect1_backgroundBlur_2_9025' result='shape' />
        </filter>
      </defs>
    </svg>
  );
}
