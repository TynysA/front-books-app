import { IIconProps } from './model/IIcon.ts';

export default function ArrowRight(props: IIconProps) {
  return (
    <svg width='24' height='24' css={[props.twstyle]} viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M8.30288 18.8444C7.96838 18.5867 7.90058 18.0992 8.15146 17.7555L14.0048 11.7556L8.15149 5.75562C7.90061 5.41197 7.9684 4.92446 8.30291 4.66673C8.63741 4.409 9.11196 4.47865 9.36283 4.82229L15.4546 11.1489C15.7171 11.5084 15.7171 12.0027 15.4546 12.3622L9.36281 18.6888C9.11193 19.0325 8.63739 19.1021 8.30288 18.8444Z'
        fill={props.fill ? props.fill : '#8E8E93'}
      />
    </svg>
  );
}
