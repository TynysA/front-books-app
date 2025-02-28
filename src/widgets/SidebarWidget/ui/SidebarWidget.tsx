import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import tw from 'twin.macro';

import { ISidebarWidget } from '../model';

export const SidebarWidget = ({ items, hiddenSidebarItems }: ISidebarWidget) => {
  const { pathname, search } = useLocation();
  const { t } = useTranslation();

  return (
    <div tw='w-[200px]'>
      <div tw='flex flex-col gap-[12px] w-[200px]'>
        {items.map(
          (el, idx) =>
            !hiddenSidebarItems.includes(el.link) && (
              <Link
                key={idx}
                to={el.link}
                tw='w-fit px-[14px] py-[10px] leading-[24px] font-semibold text-[14px] rounded-[8px] text-[#3B3B3B]'
                css={pathname + search === el.link && tw`bg-[#282828] text-white`}
              >
                {t(el.content)}
              </Link>
            )
        )}
      </div>
    </div>
  );
};
