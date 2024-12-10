import { TwStyle } from 'twin.macro';

interface IIconProps {
  twstyle?: TwStyle;
  fill?: string;
  stroke?: string;
}

export default function CloseIcon(props: IIconProps) {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      css={[props.twstyle]}
      {...props}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M20.8085 4.70711C21.199 4.31658 21.199 3.68342 20.8085 3.29289C20.418 2.90237 19.7848 2.90237 19.3943 3.29289L12.0507 10.6365L4.70711 3.29294C4.31658 2.90242 3.68342 2.90242 3.29289 3.29294C2.90237 3.68347 2.90237 4.31663 3.29289 4.70715L10.6365 12.0507L3.29289 19.3943C2.90237 19.7848 2.90237 20.418 3.29289 20.8085C3.68342 21.199 4.31658 21.199 4.70711 20.8085L12.0507 13.4649L19.3943 20.8085C19.7848 21.1991 20.418 21.1991 20.8085 20.8085C21.199 20.418 21.199 19.7849 20.8085 19.3943L13.4649 12.0507L20.8085 4.70711Z'
        fill={props.fill ? props.fill : '#0F0F0F'}
      />
    </svg>
  );
}
