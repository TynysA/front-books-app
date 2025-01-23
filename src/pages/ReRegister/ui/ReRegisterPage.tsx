import 'twin.macro';

import { useTranslation } from 'react-i18next';
import { Outlet, useNavigate } from 'react-router-dom';

import HeaderContainer from '@/shared/ui/HeaderContainer/HeaderContainer.tsx';

const ReRegisterPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const data = [
    [
      {
        title: 'Номер полиса',
        info: '669909052650660'
      },
      {
        title: 'Дата начала действия полиса',
        info: '17.05.2024'
      },
      {
        title: 'Дата и время обращения',
        info: '12.08.2024 19:20'
      }
    ],
    [
      {
        title: 'Номер полиса',
        info: '669909052650660'
      },
      {
        title: 'Дата начала действия полиса',
        info: '17.05.2024'
      },
      {
        title: 'Страхователь',
        info: 'ОМАРОВ БОЛАТ БОЛАТОВИЧ'
      },
      {
        title: 'Застрахованные',
        info: [
          {
            title: 'АХМЕТОВ АБЗАЛ',
            subTitle: '891101380908'
          },
          {
            title: 'ОМАРОВА ФАТИМА',
            subTitle: '900800700833'
          },
          {
            title: 'ОМАРОВ КАНАТ',
            subTitle: '9008007008121'
          }
        ]
      },
      {
        title: 'Авто',
        info: 'TOYOTA CAMRY',
        subInfo: '034 ASF | 02',
        type: 'CAR'
      }
    ]
  ];

  return (
    <div tw='bg-root relative pb-[21px] flex flex-col gap-[24px]'>
      <HeaderContainer variant='primary' title={'Переоформить полис'} />
      <Outlet context={{ data }} />
    </div>
  );
};
export default ReRegisterPage;
