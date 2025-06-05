import tw from 'twin.macro';

import mainLoader from '@/shared/assets/gifs/loader.gif';

const styles = {
  loader: () => [tw`w-[100px] h-[100px]`]
};
export const BackdropLoader = () => {
  return (
    <div tw='w-[calc(100% + 20px)] h-[calc(100% + 20px)] top-[-10px] left-[-10px] flex justify-center items-center fixed z-10 backdrop-blur-[6px]'>
      <img src={mainLoader} alt='Loading...' css={styles.loader()} />
    </div>
  );
};
