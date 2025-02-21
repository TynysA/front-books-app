import tw from 'twin.macro';

import { IErrMsgBlock } from '@/widgets/ErrorMessageBlock/types';

const ErrorMessageBlock = ({ children, twStyles }: IErrMsgBlock) => {
  return (
    <div
      css={[
        tw`bg-orange-border p-[16px] font-semibold leading-[normal] text-[14px] text-[#151515] rounded-[10px]`,
        twStyles
      ]}
    >
      {children}
    </div>
  );
};

export default ErrorMessageBlock;
