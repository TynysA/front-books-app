import { useNavigate } from 'react-router-dom';
import tw from 'twin.macro';

import Arrow from '@/shared/assets/icons/Arrow';
import CloseIcon from '@/shared/assets/icons/CloseIcon.tsx';

const HeaderContainer = ({ variant, title, goBackCustomHandler, showArrow = true, showCloseIcon = true }) => {
  const navigate = useNavigate();

  const goBack = () => {
    if (goBackCustomHandler) goBackCustomHandler();
    else navigate(-1);
  };

  return (
    <div tw='flex items-center justify-between px-4 pt-[24px]'>
      {/* Back Arrow */}
      {showArrow && (
        <button onClick={goBack} tw='flex items-center'>
          <Arrow stroke={variant == 'secondary' ? '#FFFFFF' : 'var(--font-primary)'} tw='w-[24px] h-[24px]' />
        </button>
      )}

      <div tw='flex-1 text-center h-[24px]'>
        <span
          css={[
            variant == 'secondary'
              ? tw`text-[#FFFFFF] text-[16px] font-medium`
              : tw`text-primary text-[18px] font-semibold`
          ]}
        >
          {title}
        </span>
      </div>

      {showCloseIcon && (
        <button tw='flex items-center'>
          <CloseIcon fill={variant == 'secondary' ? '#FFFFFF' : 'var(--font-primary)'} />
        </button>
      )}
    </div>
  );
};
// text-[16px] font-semibold text-[#fff]
export default HeaderContainer;
