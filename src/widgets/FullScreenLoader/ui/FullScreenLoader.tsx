import tw from 'twin.macro';

import docLoader from '@/shared/assets/gifs/doc-loader.gif';
import mainLoader from '@/shared/assets/gifs/loader.gif';
import { IFullScreenLoader, ILoaderStyles } from '@/widgets/FullScreenLoader/types';

const styles = {
  loader: ({ type }: ILoaderStyles) => [tw`w-[100px] h-[100px]`, type === 'doc' && tw`w-[150px] h-[150px]`]
};

const FullScreenLoader = ({ type = 'default', subtext }: IFullScreenLoader) => {
  return (
    <div
      tw='w-full h-full flex flex-col justify-center items-center gap-[50px]'
      css={[type === 'suspense' && tw`min-h-screen bg-[#ededed]`]}
    >
      <img src={type === 'doc' ? docLoader : mainLoader} alt='Loading...' css={styles.loader({ type })} />
      <p tw='text-[14px] text-white font-bold leading-[normal] text-center'>{subtext}</p>
    </div>
  );
};

export default FullScreenLoader;
