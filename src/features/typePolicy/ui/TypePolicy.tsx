import 'twin.macro';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import tw from 'twin.macro';

import CarIcon from '@/shared/assets/icons/CarIcon.tsx';
import CloseCircleIcon from '@/shared/assets/icons/CloseCircleIcon.tsx';
import DocumentIcon from '@/shared/assets/icons/DocumentIcon.tsx';
import PersonIcon from '@/shared/assets/icons/PersonIcon.tsx';
import PlucIcon from '@/shared/assets/icons/PlucIcon.tsx';
import QnaIcon from '@/shared/assets/icons/QnaIcon.tsx';
import WarningIcon from '@/shared/assets/icons/WarningIcon.tsx';

export const TypePolicy = () => {
  const navigate = useNavigate();
  const { setConfirmContent, setConfirmOpen } = useOutletContext();

  const closeDriverButtonRef = useRef(null);
  const closeCarButtonRef = useRef(null);

  const [isAddingCar, setIsAddingCar] = useState(false); // Toggle input visibility for cars
  const [isAddingDriver, setIsAddingDriver] = useState(false); // Toggle input visibility for drivers
  const [carInput, setCarInput] = useState(''); // Input value for new car
  const [driverInput, setDriverInput] = useState(''); // Input value for new driver
  const [removed, setRemoved] = useState(false);
  const [cars, setCars] = useState([{ carModel: 'TOYOTA CAMRY', grnz: 'A111AAA', id: 1 }]); // Track the list of cars
  const [drivers, setDrivers] = useState([
    { id: 1, fullName: 'ОМАРОВ БОЛАТ', isStrahavatel: true },
    { id: 2, fullName: 'АХМЕТЛОВ АБУ', isStrahavatel: false },
    { id: 3, fullName: 'Ердосов Серик', isStrahavatel: false }
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
    if (
      driverInput.trim() &&
      driverInput.length > 11 &&
      closeDriverButtonRef.current &&
      !(closeDriverButtonRef?.current == e?.relatedTarget)
    ) {
      if (initial.drivers.find(item => item.fullName === driverInput)) {
        setDrivers([
          ...drivers,
          {
            id: drivers.length + 1 + driverInput,
            fullName: driverInput,
            isStrahavatel: false
          }
        ]);
      } else {
        setDrivers([
          ...drivers,
          {
            id: drivers.length + 1 + driverInput,
            fullName: driverInput + '_New',
            isNew: true,
            isStrahavatel: false
          }
        ]);
      }
      setDriverInput('');
      setIsAddingDriver(false); // Hide the input after adding
    }
  };
  const addCar = e => {
    if (carInput.trim() && closeCarButtonRef.current && !(closeCarButtonRef?.current == e?.relatedTarget)) {
      if (initial.cars.find(car => car.grnz === carInput)) {
        setCars([
          ...cars,
          {
            id: carInput + cars.length,
            grnz: carInput,
            carModel: 'Audi A8'
          }
        ]);
      } else {
        setCars([
          ...cars,
          {
            id: carInput + cars.length,
            grnz: carInput,
            isNew: true,
            carModel: 'Audi A8'
          }
        ]);
      }
      setCarInput('');
      setIsAddingCar(false);
    }
  };
  const closeAddDriver = e => {
    e.preventDefault();
    e.stopPropagation();
    setIsAddingDriver(false);
    setDriverInput('');
    // alert('HH');
  };
  const closeCarInput = e => {
    e.preventDefault();
    e.stopPropagation();
    setIsAddingCar(false);
    setCarInput('');
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
  };
  const terminateContract = el => {
    if (el.action == 'termination') {
      setConfirmContent({
        title: 'Вы уверены, что хотите расторгнуть договор?',
        cancelText: 'Отмена',
        acceptText: 'Да, расторгнуть',
        contentType: 'col-reverse',
        handelAccept: goToTerminate,
        colorOfAccept: 'red'
      });
      setConfirmOpen(true);
    }
  };
  useEffect(() => {
    if (initial.cars !== cars || initial.drivers !== drivers) {
      console.log('----');
    }
  }, [cars, drivers]);
  return (
    <>
      <div tw='py-[24px] px-4 flex flex-col gap-[16px]'>
        <div tw='text-center flex flex-col gap-[8px] leading-none py-[16px]'>
          <div tw='text-[#F7F7F7] text-[13px] font-medium'>Стоймость страховки</div>
          <div tw='text-[#ffffff] text-[32px] font-bold'>{info.price}</div>
          <div tw='text-[#ffffff] text-[13px] font-medium'>{info.id}</div>
        </div>
        <div tw='text-[18px] bg-[#FFFFFF26] pt-[14px] flex justify-center items-center gap-[11px] py-[12px] font-semibold text-[#ffffff] rounded-[16px]'>
          <WarningIcon />
          Заявить о страховом случае
        </div>
      </div>
      <div tw='pt-[20px] pb-[30px] px-4 bg-gray-50 rounded-t-xl shadow-md flex flex-col gap-[16px]'>
        <div tw='bg-white p-4 rounded-lg shadow-nav-menu'>
          <h2 tw='text-gray-700 text-[16px] font-semibold'>Срок действия страхового полиса</h2>
          <div tw='mt-2'>
            <div tw='w-full bg-gray-200 rounded-full h-2.5'>
              <div tw='bg-green-500 h-2.5 rounded-full' style={{ width: progressBar }}></div>
            </div>
            <div tw='flex justify-between text-gray-500 text-sm mt-2'>
              <span>Действителен с {startDate}</span>
              <span>по {endDate}</span>
            </div>
          </div>
        </div>
        <div tw='bg-white p-4 rounded-lg shadow-nav-menu'>
          <h3 tw='text-[#636366] text-[13px] font-medium  mb-4'>Авто</h3>
          {cars.map((item, idx) => (
            <div key={idx} tw='flex justify-between items-center mb-4'>
              <div key={idx} tw='flex items-center'>
                <div tw='bg-green-100 p-2 rounded-full'>
                  <CarIcon />
                </div>
                <div tw='ml-3 flex gap-[12px]'>
                  <h4 tw='text-gray-800 text-[16px] font-medium'>{item.carModel}</h4>
                  <div tw='text-[#636366] py-[2px] px-[4px] flex font-normal text-[11px] rounded-[4px]  border-[1px] border-[#636366]'>
                    {item.grnz}
                  </div>
                </div>
              </div>
              <button onClick={() => removeCar(item.id)}>
                <CloseCircleIcon />
              </button>
            </div>
          ))}
          {isAddingCar && (
            <div tw='py-[12px] relative'>
              <input
                type='text'
                value={carInput}
                maxLength={12}
                onChange={e => setCarInput(e.target.value)}
                onBlur={addCar}
                onKeyDown={e => {
                  if (e.key === 'Enter') {
                    addCar();
                    e.target.blur();
                  }
                }}
                tw='bg-[#EAECED] outline-[#4EBC73] text-[#8E8E93] w-full border px-[16px] py-[12px] text-[16px] rounded-[16px]'
                placeholder='Введите Государственный Номер'
              />
              {carInput.length > 0 && (
                <button
                  ref={closeCarButtonRef}
                  tw='absolute right-[12px] top-[50%] translate-y-[-50%]'
                  onClick={closeCarInput}
                >
                  <CloseCircleIcon />
                </button>
              )}
            </div>
          )}
          <div
            css={[isAddingCar && tw`opacity-50`]}
            tw='flex items-center text-[#4EBC73] text-[16px] font-semibold'
            onClick={() => setIsAddingCar(true)}
          >
            <div tw='bg-green-100 p-2 rounded-full'>
              <PlucIcon />
            </div>
            <span tw='ml-3'>Добавить авто</span>
          </div>
        </div>
        <div tw='bg-white p-4 rounded-lg shadow-nav-menu'>
          <h3 tw='text-[#636366] text-[13px] font-medium'>Водители</h3>
          <div tw=''>
            {drivers.map((driver, idx) => (
              <div key={idx} tw='py-[12px] flex items-center justify-between border-b-[1px] border-[#EAECED]'>
                <div tw='flex items-center'>
                  <div tw='bg-green-100 p-2 rounded-full'>
                    <PersonIcon />
                  </div>
                  <div tw='ml-3 text-[16px]'>
                    <h4 tw='text-gray-800'>{driver?.fullName?.toUpperCase()}</h4>
                  </div>
                </div>
                {driver.isStrahavatel ? (
                  <span tw='bg-[#EAECED] text-[#636366] text-[13px] px-2 py-1 rounded-full'>Страхаватель</span>
                ) : (
                  <button onClick={() => removeDriver(driver.id)}>
                    <CloseCircleIcon />
                  </button>
                )}
              </div>
            ))}
          </div>
          {isAddingDriver && (
            <div tw='py-[12px] relative'>
              <input
                id='iin'
                type='tel'
                value={driverInput}
                maxLength={12}
                onChange={e => setDriverInput(e.target.value)}
                onBlur={addDriver}
                onKeyDown={e => {
                  if (e.key === 'Enter') {
                    addDriver();
                    e.target.blur(); // Убираем фокус с input, чтобы скрыть клавиатуру
                  }
                }}
                tw='bg-[#EAECED] outline-[#4EBC73] text-[#8E8E93] w-full border px-[16px] py-[12px] text-[16px] rounded-[16px]'
                placeholder='Введите ИИН'
              />
              {driverInput.length > 0 && (
                <button
                  ref={closeDriverButtonRef}
                  tw='absolute  right-[12px] top-[50%] translate-y-[-50%]'
                  onClick={closeAddDriver}
                >
                  <CloseCircleIcon />
                </button>
              )}
            </div>
          )}
          <div
            css={[isAddingDriver && tw`opacity-50`]}
            tw={'flex items-center text-[#4EBC73] text-[16px] font-semibold py-[12px]'}
            onClick={() => setIsAddingDriver(true)}
          >
            <div tw='bg-green-100 p-2 rounded-full'>
              <PlucIcon />
            </div>
            <span tw='ml-3'>Добавить водителя</span>
          </div>
        </div>
        <div tw='bg-white p-4 rounded-lg shadow-nav-menu'>
          <h3 tw='text-[#636366] text-[13px] font-medium  mb-4'>Детали</h3>
          <ul tw='space-y-4'>
            {details.map((item, idx) => (
              <li key={idx} tw='flex items-center justify-between' onClick={() => terminateContract(item)}>
                <div tw='flex items-center'>
                  <div tw='bg-green-100 p-2 rounded-full'>
                    {item.type == 'DOCUMENTS' ? <DocumentIcon /> : <QnaIcon />}
                  </div>
                  <span tw='ml-3 text-gray-700'>{item.label}</span>
                </div>
                {/*<FiChevronRight tw='w-5 h-5 text-gray-400' />*/}
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
