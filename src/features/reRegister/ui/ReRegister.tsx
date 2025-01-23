import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import tw from 'twin.macro';

import { reRegisterSchema } from '@/features/reRegister';
import Expand from '@/shared/assets/icons/Expand.tsx';
import LinedInfoIcon from '@/shared/assets/icons/LinedInfoIcon.tsx';
import Checkbox from '@/shared/ui/Checkbox/Checkbox.tsx';
import { DataBlock } from '@/shared/ui/DataBlock/DataBlock.tsx';

export const ReRegister = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const info = {
    isAdditionalSumma: false
  };
  const {
    control,
    handleSubmit,
    formState: { isValid }
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(reRegisterSchema(t)),
    defaultValues: {
      agreement: true
    }
  });

  const handeleReRegister = event => {
    console.log('handeleReRegister');
    // navigate('/re-register/finish');
    navigate('/re-register/consent');
  };

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
  const dogovor = [
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
  ];
  const newDogovor = [
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
  ];
  const options = [
    { label: '12 месяцев' },
    { label: '11 месяцев' },
    { label: '10 месяцев' },
    { label: '9 месяцев' },
    { label: '8 месяцев' }
  ];

  return (
    <form onSubmit={handleSubmit(handeleReRegister)} tw='px-4 flex flex-col gap-[24px] mt-[24px]'>
      <div tw='flex flex-col gap-[16px]'>
        <div tw='text-primary text-[28px] font-bold'>Подтвердите данные</div>
        <div tw='text-secondary text-[16px] flex flex-col gap-[12px]'>
          <p>
            Электронное Заявление о досрочном прекращении текущего договора по причине изменения списка водителей или
            авто.
          </p>
          <p>
            Новый полис с обновленным списком застрахованных/авто начнет действовать на следующий день после успешного
            переоформления.
          </p>
        </div>
      </div>
      <DataBlock twStyle={tw`bg-primary`} title='Текущий договор' data={dogovor} />

      <DataBlock twStyle={tw`bg-primary`} title='Новый договор' data={newDogovor} />

      <div tw='flex flex-col bg-primary p-[16px] text-primary rounded-[16px]'>
        <div tw='flex justify-between items-center pb-[16px] border-b-[1px] border-[#EAECED] '>
          <div tw=''>Период действия</div>
          <div tw='flex gap-[14px] text-opposite  bg-[#EAECED] px-[16px] py-[14px] rounded-[16px]'>
            <div>12 месяцев</div>
            <Expand />
          </div>
        </div>
        <div tw='py-[16px] flex justify-between items-center'>
          <div>{info.isAdditionalSumma ? 'Сумма к доплате' : 'Сумма к возврату'}</div>
          <div>20 000 ₸</div>
        </div>
        <div tw='flex items-center bg-fourthly gap-[12px] px-[12px] py-[8px] rounded-[16px]'>
          <div>
            <LinedInfoIcon />
          </div>
          <div tw='text-secondary-opposite text-[14px] font-medium'>
            Это предварительный расчет суммы к возврату. Окончательный расчет будет произведен на дату заключения.
          </div>
        </div>
      </div>
      <Checkbox
        showErrorBlock={false}
        variant={'small'}
        control={control}
        name='agreement'
        disabled={false}
        label={<span dangerouslySetInnerHTML={{ __html: t('re-register.agreement') }}></span>}
      />
      <div tw='text-primary w-full'>
        <button
          type={'submit'}
          disabled={!isValid}
          tw='bg-[#4EBC73] w-full text-[17px] font-semibold text-center py-[14px] rounded-[16px]'
          css={[!isValid && tw`bg-[#B8E4C7]`]}
          onClick={handeleReRegister}
        >
          Продолжить
        </button>
      </div>
      {/*<ButtonSheet type='select' options={options} title={'Период действия'} />*/}
    </form>
  );
};
