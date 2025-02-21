import { AnimatePresence, motion } from 'framer-motion';
import { Fragment, useState } from 'react';
import { useTranslation } from 'react-i18next';
import tw from 'twin.macro';

import Expand from '@/shared/assets/icons/Expand.tsx';
import { ChangeLocaleFn, ILangSwitcher, ISwitcher } from '@/widgets/LangSwitcher/types';

const LangSwitcher = ({ type = 'main' }: ILangSwitcher) => {
  const { i18n } = useTranslation();

  const changeLocale: ChangeLocaleFn = async locale => {
    localStorage.setItem('lang', locale);
    await i18n.changeLanguage(locale);
  };

  return <Fragment>{type === 'main' && <MainLangSwitcher i18n={i18n} changeLocale={changeLocale} />}</Fragment>;
};

const MainLangSwitcher = ({ i18n, changeLocale }: ISwitcher) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <div tw='relative'>
      <button tw='p-[10px]' onClick={toggleMenu}>
        <div tw='flex justify-center items-center gap-[6px]'>
          <span>{i18n.language === 'ru' ? 'RUS' : 'ENG'}</span>
          <Expand
            twstyle={isMenuOpen ? tw`rotate-180 transition-transform` : tw`transition-transform`}
            fill={'#2F2F2F'}
          />
        </div>
      </button>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0
            }}
            animate={{
              height: 'auto',
              opacity: 1,
              transition: {
                height: {
                  duration: 0.4
                },
                opacity: {
                  duration: 0.25,
                  delay: 0.15
                }
              }
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: {
                  duration: 0.4
                },
                opacity: {
                  duration: 0.25
                }
              }
            }}
            tw='absolute left-[10px]'
          >
            <button onClick={() => changeLocale(i18n.language === 'ru' ? 'en' : 'ru')}>
              {i18n.language === 'ru' ? 'ENG' : 'RUS'}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LangSwitcher;
