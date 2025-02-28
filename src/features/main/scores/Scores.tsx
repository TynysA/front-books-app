import 'twin.macro';

import { useTranslation } from 'react-i18next';
import tw from 'twin.macro';

import { scoresList, tableHeaders } from '@/features/main/scores/model/types.ts';
import { beautifyDate } from '@/shared/utils';

const Scores = () => {
  const { t } = useTranslation();

  return (
    <div tw='p-[30px] rounded-[20px] flex flex-col gap-[20px] bg-primary text-primary'>
      <div id={'actions'} tw='flex  w-full'>
        <div tw='text-[30px] font-bold'>{t('main.scores')}</div>
      </div>
      <div id={'list-of-scores'} tw='border border-[#DEE0E3] rounded-[12px] py-[10px]'>
        <table tw='min-w-full'>
          {/* Dynamic Table Header */}
          <thead tw='border-b border-[#DEE0E3]'>
            <tr tw='px-[20px]'>
              {tableHeaders.map(key => (
                <th
                  key={key}
                  tw='max-w-[150px] pb-[10px] text-left text-[#8E8E8E] font-bold  leading-[normal] pr-[16px] [&:first-of-type]:pl-[20px] [&:last-of-type]:pr-[20px]'
                >
                  {t(`scores.${key}`)}
                </th>
              ))}
            </tr>
          </thead>

          {/* Table Body */}
          <tbody tw='border-none'>
            {scoresList.map(score => (
              <tr key={score.id} tw=''>
                {tableHeaders.map(key => (
                  <td
                    key={key}
                    tw='pr-[16px] py-[12px] leading-[normal] text-black w-[30px] [&:first-of-type]:pl-[20px] [&:last-of-type]:pr-[20px]'
                    css={[tw`max-w-[150px] truncate overflow-hidden text-ellipsis whitespace-nowrap`]}
                  >
                    {/* Render data dynamically */}
                    {key === 'completed_at' ? (
                      beautifyDate(score[key])
                    ) : key === 'is_passed' ? (
                      score[key] ? (
                        <span tw='text-green-500 font-bold'>✔ Passed</span>
                      ) : (
                        <span tw='text-red-500 font-bold'>✘ Failed</span>
                      )
                    ) : (
                      score[key]
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Scores;
