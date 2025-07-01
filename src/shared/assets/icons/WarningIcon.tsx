import { IIconProps } from './model/IIcon.ts';
export default function WarningIcon(props: IIconProps) {
  return (
    <svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M11.6837 1.65959C10.5783 -0.552209 7.42203 -0.552222 6.31662 1.65956L0.319619 13.6588C-0.67728 15.6535 0.773225 18 3.00314 18H14.997C17.2269 18 18.6774 15.6535 17.6805 13.6589L11.6837 1.65959ZM8 6C8 5.44772 8.44772 5 9 5C9.55228 5 10 5.44772 10 6V10C10 10.5523 9.55228 11 9 11C8.44772 11 8 10.5523 8 10V6ZM8 13C8 12.4477 8.44772 12 9 12C9.55228 12 10 12.4477 10 13C10 13.5523 9.55228 14 9 14C8.44772 14 8 13.5523 8 13Z'
        fill='url(#paint0_linear_33_7302)'
      />
      <defs>
        <linearGradient
          id='paint0_linear_33_7302'
          x1='3.68924'
          y1='18.6356'
          x2='16.3998'
          y2='2.04933'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='white' stopOpacity='0.4' />
          <stop offset='1' stopColor='white' />
        </linearGradient>
      </defs>
    </svg>
  );
}
