import { IIconProps } from './model/IIcon.ts';
export default function FileGreenCheckIcon(props: IIconProps) {
  return (
    <svg
      className='ours'
      {...props}
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0_99_10278)'>
        <g clipPath='url(#clip1_99_10278)'>
          <path
            d='M10.3126 17.2501C10.2006 17.2501 10.0886 17.2072 10.0033 17.1219L6.0658 13.1844C5.89473 13.0134 5.89473 12.7369 6.0658 12.5658L7.3783 11.2533C7.54936 11.0822 7.82586 11.0822 7.99692 11.2533L10.3126 13.569L17.0033 6.8783C17.1744 6.70723 17.4509 6.70723 17.6219 6.8783L18.9344 8.1908C19.1055 8.36186 19.1055 8.63836 18.9344 8.80942L10.6219 17.1219C10.5366 17.2072 10.4246 17.2501 10.3126 17.2501Z'
            fill='#4FAF3B'
          />
        </g>
      </g>
      <defs>
        <clipPath id='clip0_99_10278'>
          <rect width='23.4146' height='24' fill='white' transform='translate(0.5)' />
        </clipPath>
        <clipPath id='clip1_99_10278'>
          <rect width='14' height='14' fill='white' transform='translate(5.5 5)' />
        </clipPath>
      </defs>
    </svg>
  );
}
