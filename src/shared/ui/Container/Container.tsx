import 'twin.macro';

import { IContainer } from '@/shared/ui/Container/types';
const Container = ({ children, twStyles }: IContainer) => {
  return (
    <div
      tw='my-0 mx-auto w-[100%] max-w-[1293px] laptop:max-w-[1030px] tablet:max-w-[738px] mobile-lg:max-w-[unset] mobile-lg:px-[20px]'
      css={[twStyles]}
    >
      {children}
    </div>
  );
};
export default Container;
