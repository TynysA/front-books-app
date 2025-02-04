import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import tw from 'twin.macro';

import { HeaderPolicy } from '@/features/typePolicy/ui/components/HeaderPolicy.tsx';
import { PolicyData } from '@/features/typePolicy/ui/components/PolicyData.tsx';
import ArrowRight from '@/shared/assets/icons/ArrowRight.tsx';
import CarIcon from '@/shared/assets/icons/CarIcon.tsx';
import DocumentDeleteIcon from '@/shared/assets/icons/DocumentDeleteIcon.tsx';
import DocumentIcon from '@/shared/assets/icons/DocumentIcon.tsx';
import PersonIcon from '@/shared/assets/icons/PersonIcon.tsx';
import QnaIcon from '@/shared/assets/icons/QnaIcon.tsx';

export const TypePolicy = () => {
  const navigate = useNavigate();
  const { setConfirmContent, setConfirmOpen, confirmOpen } = useOutletContext();

  const closeDriverButtonRef = useRef(null);
  const closeCarButtonRef = useRef(null);

  const [cars, setCars] = useState([{ title: 'TOYOTA CAMRY', subTitle: 'A111AAA', id: 1 }]); // Track the list of cars
  const [drivers, setDrivers] = useState([
    { id: 1, title: 'ОМАРОВ БОЛАТ', canNotRemove: true },
    { id: 2, title: 'АХМЕТЛОВ АБУ', canNotRemove: false },
    { id: 3, title: 'Ердосов Серик', canNotRemove: false }
  ]);
  const [initial] = useState({ drivers, cars });

  const details = [
    { label: 'Скачать полис', type: 'DOCUMENTS', action: 'download', fileId: '' },
    { label: 'Продлить полис', type: 'DOCUMENTS', action: 'extend', fileId: '' },
    { label: 'Расторжение', type: 'DOCUMENTS', action: 'termination', fileId: '' },
    { label: 'Правила страхования', type: 'DOCUMENTS', action: 'rules', fileId: '' },
    { label: 'Важно знать', type: 'FAQ', fileId: '' }
  ];
  const info = {
    startDate: '06.05.2024',
    endDate: '05.05.2025',
    price: '2 000 ₸',
    id: '№2319М110019К'
  };
  const startDate = '06.05.2024';
  const endDate = '05.05.2025';

  const progressBar = useMemo(() => {
    const start = new Date(info.startDate.split('.').reverse().join('-')); // Format to 'YYYY-MM-DD'
    const end = new Date(info.endDate.split('.').reverse().join('-'));
    const today = new Date();
    const percentage = Math.min(Math.max(((today - start) / (end - start)) * 100, 0), 100);
    return percentage + '%';
  }, []);
  const isNew = useMemo(() => {
    const temp = !deepEqual(initial.cars, cars) || !deepEqual(initial.drivers, drivers);
    temp ? setConfirmOpen(true) : setConfirmOpen(false);
    return temp;
  }, [cars, drivers]);

  const addDriver = e => {
    const newElement = e.target.value;
    if (
      newElement.trim() &&
      newElement.length > 11 &&
      closeDriverButtonRef.current &&
      !(closeDriverButtonRef?.current == e?.relatedTarget)
    ) {
      if (initial.drivers.find(item => item.title === newElement)) {
        setDrivers([
          ...drivers,
          {
            id: drivers.length + 1 + newElement,
            title: newElement,
            canNotRemove: false
          }
        ]);
      } else {
        setDrivers([
          ...drivers,
          {
            id: drivers.length + 1 + newElement,
            title: newElement + '_New',
            isNew: true,
            canNotRemove: false
          }
        ]);
      }
    }
  };
  const addCar = e => {
    const newElement = e.target.value;
    if (newElement.trim() && closeCarButtonRef.current && !(closeCarButtonRef?.current == e?.relatedTarget)) {
      if (initial.cars.find(car => car.subTitle === newElement)) {
        setCars([
          ...cars,
          {
            id: newElement + cars.length,
            subTitle: newElement,
            title: 'Audi A8'
          }
        ]);
      } else {
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
    }
  };
  const removeDriver = driverId => {
    setDrivers(prevDrivers => prevDrivers.filter(driver => driver.id !== driverId));
  };
  const removeCar = carId => {
    setCars(prevCars => prevCars.filter(car => car.id !== carId));
  };

  const handeleReRegister = () => {
    navigate('/re-register');
  };

  const goToTerminate = () => {
    console.log('goToTerminate');
    navigate('/terminate');
  };
  const terminateContract = el => {
    if (el.action == 'termination') {
      setConfirmContent({
        title: 'Вы уверены, что хотите расторгнуть договор?',
        cancelText: 'Отмена',
        acceptText: 'Да, расторгнуть',
        contentType: 'col-reverse',
        handleAccept: goToTerminate,
        colorOfAccept: 'red'
      });
      setConfirmOpen(true);
    }
  };
  useEffect(() => {}, []);
  return (
    <>
      <HeaderPolicy price={info.price} id={info.id} />
      <div
        tw='pt-[20px] pb-[30px] px-4 bg-root rounded-t-xl shadow-md flex flex-col gap-[16px]'
        css={[isNew && tw`pb-[80px]`]}
      >
        <div tw='bg-primary p-4 rounded-lg shadow-nav-menu'>
          <h2 tw='text-primary text-[16px] font-semibold'>Срок действия страхового полиса</h2>
          <div tw='mt-2'>
            <div tw='w-full bg-thirdly rounded-full h-2.5'>
              <div tw='bg-[#4EBC73] h-2.5 rounded-full' style={{ width: progressBar }}></div>
            </div>
            <div tw='flex justify-between text-gray text-sm mt-2'>
              <span>Действителен с {startDate}</span>
              <span>по {endDate}</span>
            </div>
          </div>
        </div>
        <PolicyData
          title={'Авто'}
          placeholder={'Введите Государственный Номер'}
          data={cars}
          logIcon={<CarIcon />}
          handleRemove={removeCar}
          handleAdd={addCar}
          closeButtonRef={closeCarButtonRef}
        />
        <PolicyData
          title={'Водители'}
          placeholder={'Введите ИИН'}
          data={drivers}
          logIcon={<PersonIcon />}
          handleRemove={removeDriver}
          handleAdd={addDriver}
          closeButtonRef={closeDriverButtonRef}
        />
        <div tw='bg-primary p-4 rounded-lg shadow-nav-menu'>
          <h3 tw='text-secondary text-[13px] font-medium  mb-4'>Детали</h3>
          <ul tw='space-y-4'>
            {details.map((item, idx) => (
              <li key={idx} tw='flex items-center justify-between' onClick={() => terminateContract(item)}>
                <div tw='flex items-center'>
                  <div tw='bg-green-100 p-2 rounded-full'>
                    {item.type == 'DOCUMENTS' ? (
                      item.action == 'termination' ? (
                        <DocumentDeleteIcon />
                      ) : (
                        <DocumentIcon />
                      )
                    ) : (
                      <QnaIcon />
                    )}
                  </div>
                  <span tw='ml-3 text-primary'>{item.label}</span>
                </div>
                <ArrowRight fill={'var(--font-gray)'} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {isNew && (
        <div tw='fixed z-[3] bottom-[15px] text-white px-4 w-full'>
          <div
            tw='bg-[#4EBC73] text-[17px] font-semibold text-center py-[14px] rounded-[16px]'
            onClick={handeleReRegister}
          >
            Переоформить полис
          </div>
        </div>
      )}
    </>
  );
};
const deepEqual = (a: any[], b: any[]): boolean => {
  if (a.length !== b.length) return false;
  return a.every((item, index) => JSON.stringify(item) === JSON.stringify(b[index]));
};
