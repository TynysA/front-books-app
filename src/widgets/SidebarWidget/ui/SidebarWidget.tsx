import { useTranslation } from 'react-i18next';
import { Link, useLocation, useParams } from 'react-router-dom';
import tw from 'twin.macro';

import { ISidebarWidget } from '../model';

export const SidebarWidget = ({ items, hiddenSidebarItems }: ISidebarWidget) => {
  const { pathname, search } = useLocation();
  const { processDefinitionKey, caseId, taskId, disableControls } = useParams();
  const { t } = useTranslation();

  return (
    <div tw='w-[240px]'>
      <div tw='flex flex-col gap-[12px] w-[240px]'>
        {items.map(
          (el, idx) =>
            !hiddenSidebarItems.includes(el.link) && (
              <Link
                key={idx}
                to={
                  caseId && taskId && processDefinitionKey && disableControls
                    ? el.link
                        .replace(':disableControls', disableControls)
                        .replace(':processDefinitionKey', processDefinitionKey)
                        .replace(':caseId', caseId)
                        .replace(':taskId', taskId)
                    : el.link
                }
                tw='w-fit px-[14px] py-[10px] leading-[24px] font-semibold text-[14px] rounded-[8px] text-[#3B3B3B]'
                css={[
                  (caseId && taskId && processDefinitionKey && disableControls
                    ? pathname + search ===
                      el.link
                        .replace(':disableControls', disableControls)
                        .replace(':processDefinitionKey', processDefinitionKey)
                        .replace(':caseId', caseId)
                        .replace(':taskId', taskId)
                    : pathname + search === el.link) && tw`bg-[#282828] text-white`,
                  el.isChild && tw`px-[24px]`
                ]}
              >
                {t(el.content)}
              </Link>
            )
        )}
      </div>
    </div>
  );
};
