import { motion } from 'framer-motion';
import tw from 'twin.macro';

import { IBtnStyles, IButton, IButtonVariants, IIconButton, ILinkButton } from './types.ts';

const buttonVariants: IButtonVariants = {
  primary: tw`bg-[#11583C] text-[14px] leading-[normal] font-bold text-white p-[16px] rounded-[10px]`
  // colorBg: tw`bg-[#B3B3B3] text-[14px] leading-[normal] font-bold text-[#242624] p-[16px] rounded-[10px]`,
  // transparent: tw`bg-transparent text-[14px] leading-[normal] font-bold text-[#050505] p-[16px] rounded-[10px] border border-black`,
  // material: tw`bg-white text-[16px] leading-[normal] font-bold text-[#4FAF3B] p-[16px] rounded-[10px] shadow-material-btn`,
  // table_control: tw`py-[1px] px-[10px] font-bold text-white bg-button-gradient-green rounded-[3px]`,
  // flat: tw`bg-[#4EBC73] text-[18px] rounded-[16px] text-white font-semibold`,
  // panel: tw`bg-[#517F48] py-[10px] px-[16px] text-[16px] rounded-[10px] text-white shadow-btn font-semibold`,
  // secondary: tw`bg-button-green-gradient text-[16px] rounded-[10px] text-white font-semibold`,
  // grey: tw`bg-[#EAECED] text-[18px] rounded-[10px] text-[#4EBC73] font-semibold`
};

const styles = {
  button: ({ variant, twStyle }: IBtnStyles) => [
    tw`disabled:cursor-not-allowed disabled:opacity-[0.5]`,
    buttonVariants[variant as keyof IButtonVariants],
    twStyle && twStyle
  ]
};

const Button = ({
  variant = 'primary',
  children,
  icon,
  disabled,
  type,
  onClick,
  loading = false,
  twStyle,
  isLoading = false
}: IButton) => {
  return (
    <motion.button
      css={styles.button({ variant, twStyle, isLoading })}
      disabled={loading || disabled}
      whileTap={{ scale: !disabled || !loading ? 0.97 : 1 }}
      type={type}
      onClick={onClick}
    >
      {variant === 'primary' && <LinkButton text={children} icon={icon} />}
      {variant === 'icon' && <IconButton icon={icon} />}
    </motion.button>
  );
};

const LinkButton = ({ text, icon }: ILinkButton) => {
  if (icon)
    return (
      <div tw='flex gap-[6px] items-center justify-center'>
        <span>{text}</span>
        {icon}
      </div>
    );
  return <div tw='flex justify-center items-center'>{text}</div>;
};

const IconButton = ({ icon }: IIconButton) => {
  return <div>{icon}</div>;
};

export default Button;
