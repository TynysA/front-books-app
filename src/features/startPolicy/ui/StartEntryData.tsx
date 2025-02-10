import 'twin.macro';

import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useOutletContext } from 'react-router-dom';

import CarIcon from '@/shared/assets/icons/CarIcon.tsx';
import PersonIcon from '@/shared/assets/icons/PersonIcon.tsx';
import { ButtonSheet } from '@/widgets/ButtonSheet';
import { ISelectOptions } from '@/widgets/ButtonSheet/ui/type.ts';
import { CarWidget } from '@/widgets/CarWidget/ui';
import { DateWidget } from '@/widgets/DateWidget/ui';
import { PolicyholderWidget } from '@/widgets/PolicyholderWidget/ui';

export const StartEntryData = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { setConfirmContent, setConfirmOpen, confirmOpen } = useOutletContext();
  const closeCarButtonRef = useRef(null);
  const closeDriverButtonRef = useRef(null);

  const [cars, setCars] = useState([{ title: 'TOYOTA CAMRY', subTitle: 'A111AAA', id: 1 }]);

  const [drivers, setDrivers] = useState([
    { iin: '030955447485', fullName: 'ОМАРОВ БОЛАТ БОЛАТОВИЧ', benefits: false, driver: false, showDriver: true }
  ]);

  const [info, setInfo] = useState();
  const [showInfoButtonSheet, setInfoShowButtonSheet] = useState<boolean>(false);
  const [showSelectButtonSheet, setSelectShowButtonSheet] = useState<boolean>(false);
  const [showDateButtonSheet, setShowDateButtonSheet] = useState<boolean>(false);

  const [periodTime, setPeriodTime] = useState<string>('12 месяцев');

  const [startDate, satStartDate] = useState(new Date());

  const changePeriodTime = formData => {
    if (formData.label !== periodTime) {
      setPeriodTime(formData.label);
    }
  };
  const options: ISelectOptions[] = [
    { label: '12 месяцев' },
    { label: '11 месяцев' },
    { label: '10 месяцев' },
    { label: '9 месяцев' },
    { label: '8 месяцев' }
  ];

  const openInfo = item => {
    console.log(item);
    setInfo(item);
    setInfoShowButtonSheet(true);
  };
  const addCar = e => {
    const newElement = e.target.value;
    if (newElement.trim() && closeCarButtonRef.current && !(closeCarButtonRef?.current == e?.relatedTarget)) {
      setCars([
        ...cars,
        {
          id: newElement + cars.length,
          subTitle: newElement,
          isNew: true,
          title: 'Audi A8'
        }
      ]);
    }
  };
  const removeCar = carId => {
    console.log(carId);
    setConfirmOpen(true);
    setConfirmContent({
      title: 'Удалить авто',
      subTitle: 'Вы точно хотите удалить TOYOTA CAMRY?',
      cancelText: 'Отмена',
      acceptText: 'Удалить',
      contentType: 'row',
      handleAccept: () => {
        logs(carId);
      },
      colorOfAccept: 'red'
    });
    // setCars(prevCars => prevCars.filter(car => car.id !== carId));
  };

  const addDriver = e => {
    console.log(e);
    const newElement = e.target.value;
    console.log(newElement);
    if (
      newElement.trim() &&
      newElement.length > 11 &&
      closeDriverButtonRef.current &&
      !(closeDriverButtonRef?.current == e?.relatedTarget)
    ) {
      console.log('=----');
      setDrivers([...drivers, { iin: newElement, title: 'HHH RRR LLL', benefits: false, driver: false }]);
    }
  };
  const removeDriver = (item, onConfirm) => {
    setConfirmOpen(true);
    setConfirmContent({
      title: 'Удалить водителя',
      subTitle: `Вы точно хотите удалить ${item.fullName} из списка водителей?`,
      cancelText: 'Отмена',
      acceptText: 'Удалить',
      contentType: 'row',
      handleAccept: () => {
        onConfirm();
        setConfirmOpen(false);
      },
      colorOfAccept: 'red'
    });
  };

  const logs = item => {
    console.log('item', item);
  };
  const handleSubmit = e => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <form tw='p-[16px] flex flex-col mt-[24px] flex-grow border-t-[1px] border-[#EAECED]' onSubmit={handleSubmit}>
      <div tw='flex flex-col gap-[16px] h-[100%]'>
        <div tw='text-primary text-[28px] font-bold'>Введите данные</div>
        <div
          tw='text-primary text-[28px] font-bold'
          // onClick={() => openInfo(infoSheet.benefitsAvailable)}
        >
          <PolicyholderWidget
            title={'Страхователь'}
            placeholder={'Введите ИИН'}
            data={drivers}
            logIcon={<PersonIcon />}
            handleRemove={removeDriver}
            handleAdd={addDriver}
            onChange={logs}
            closeButtonRef={closeDriverButtonRef}
          />
        </div>
        <div tw='text-primary text-[28px] font-bold' id='add-car'>
          <CarWidget
            title={'Авто'}
            placeholder={'Введите Государственный Номер'}
            data={cars}
            logIcon={<CarIcon />}
            handleRemove={removeCar}
            handleAdd={addCar}
            closeButtonRef={closeCarButtonRef}
          />
        </div>
        <div tw='text-primary text-[28px] font-bold' id='date'>
          <DateWidget
            periodTime={periodTime}
            startDate={startDate}
            setSelectShowButtonSheet={setSelectShowButtonSheet}
            setShowDateButtonSheet={setShowDateButtonSheet}
          />
        </div>
        <div tw='text-primary text-[28px] font-bold' tw='text-[#FFFFFF] w-full'>
          <button
            type={'submit'}
            tw='bg-[#4EBC73] text-[#FFFFFF] w-full text-[17px] font-semibold text-center py-[14px] rounded-[16px]'
          >
            Рассчитать стоимость
          </button>
        </div>
        <ButtonSheet
          show={showSelectButtonSheet}
          type='select'
          defaultValue={periodTime}
          title='Период действия'
          options={options}
          onChange={changePeriodTime}
          onClose={() => setSelectShowButtonSheet(false)}
        />
        <ButtonSheet
          show={showInfoButtonSheet}
          type='info'
          title={info?.title}
          text={info?.text}
          list={info?.list}
          onClose={() => setInfoShowButtonSheet(false)}
        />
      </div>
    </form>
  );
};
