import { TwStyle } from 'twin.macro';

interface IIconProps {
  twstyle?: TwStyle;
  fill?: string;
  stroke?: string;
}

export default function Arrow(props: IIconProps) {
  return (
    <svg
      css={[props.twstyle]}
      {...props}
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill={props.fill ? props.fill : 'none'}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M10 19L3 12M3 12L10 5M3 12L21 12' stroke={props.stroke ? props.stroke : '#0F0F0F'} />
    </svg>
  );
}
