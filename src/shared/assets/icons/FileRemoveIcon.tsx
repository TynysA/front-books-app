import { IIconProps } from './model/IIcon.ts';

export default function FileRemoveIcon(props: IIconProps) {
  return (
    <svg
      className='ours'
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='25'
      height='25'
      viewBox='0 0 25 25'
      fill='none'
    >
      <path
        d='M12.5 22.5C6.977 22.5 2.5 18.023 2.5 12.5C2.5 6.977 6.977 2.5 12.5 2.5C18.023 2.5 22.5 6.977 22.5 12.5C22.5 18.023 18.023 22.5 12.5 22.5ZM12.5 11.086L9.672 8.257L8.257 9.672L11.086 12.5L8.257 15.328L9.672 16.743L12.5 13.914L15.328 16.743L16.743 15.328L13.914 12.5L16.743 9.672L15.328 8.257L12.5 11.086Z'
        fill='#A9A9A9'
      />
    </svg>
  );
}
