import 'twin.macro';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Button from '@/shared/ui/actionsUI/Button/Button';

const ProfilePersonalPage = () => {
  const { t } = useTranslation();

  const [username, setUsername] = useState('');
  const [status, setStatus] = useState('');
  const [birthDay, setBirthDay] = useState('');
  const [birthMonth, setBirthMonth] = useState('');
  const [birthYear, setBirthYear] = useState('');
  const [gender, setGender] = useState('hidden');
  const [about, setAbout] = useState('');
  const [contacts, setContacts] = useState({
    site: '',
    email: '',
    skype: '',
    vk: '',
    twitter: ''
  });

  const handleSave = () => {
    // Тут будет запрос на сохранение
    console.log({
      username,
      status,
      birthDay,
      birthMonth,
      birthYear,
      gender,
      about,
      contacts
    });
  };

  return (
    <div tw=' bg-white p-6 rounded-2xl shadow-lg flex flex-col gap-4'>
      <h2 tw='text-[24px] font-bold mb-4'>{t('profile.personal-info')}</h2>

      {/* Имя и фамилия */}
      <div>
        <label tw='block font-semibold mb-1'>{t('profile.username')}</label>
        <input
          type='text'
          value={username}
          onChange={e => setUsername(e.target.value)}
          tw='border rounded px-3 py-2 w-full'
        />
      </div>

      {/* Статус */}
      <div>
        <label tw='block font-semibold mb-1'>{t('profile.status')}</label>
        <input
          type='text'
          value={status}
          onChange={e => setStatus(e.target.value)}
          tw='border rounded px-3 py-2 w-full'
        />
      </div>

      {/* Дата рождения */}
      <div>
        <label tw='block font-semibold mb-1'>{t('profile.birthday')}</label>
        <div tw='flex gap-2'>
          <input
            placeholder={t('profile.day')}
            type='text'
            value={birthDay}
            onChange={e => setBirthDay(e.target.value)}
            tw='border rounded px-2 py-1 w-[50px]'
          />
          <input
            placeholder={t('profile.month')}
            type='text'
            value={birthMonth}
            onChange={e => setBirthMonth(e.target.value)}
            tw='border rounded px-2 py-1 w-[100px]'
          />
          <input
            placeholder={t('profile.year')}
            type='text'
            value={birthYear}
            onChange={e => setBirthYear(e.target.value)}
            tw='border rounded px-2 py-1 w-[70px]'
          />
        </div>
      </div>

      {/* Пол */}
      <div>
        <label tw='block font-semibold mb-1'>{t('profile.gender')}</label>
        <select value={gender} onChange={e => setGender(e.target.value)} tw='border rounded px-3 py-2 w-full'>
          <option value='hidden'>{t('profile.gender-hidden')}</option>
          <option value='male'>{t('profile.gender-male')}</option>
          <option value='female'>{t('profile.gender-female')}</option>
        </select>
      </div>

      {/* О себе */}
      <div>
        <label tw='block font-semibold mb-1'>{t('profile.about')}</label>
        <textarea
          value={about}
          onChange={e => setAbout(e.target.value)}
          rows={5}
          tw='border rounded px-3 py-2 w-full'
        />
      </div>

      {/* Контакты */}
      <div>
        <label tw='block font-semibold mb-1'>{t('profile.contacts')}</label>
        {Object.entries(contacts).map(([key, value]) => (
          <input
            key={key}
            placeholder={key}
            value={value}
            onChange={e => setContacts(prev => ({ ...prev, [key]: e.target.value }))}
            tw='border rounded px-3 py-2 w-full mb-2'
          />
        ))}
      </div>
      <Button onClick={handleSave}>{t('profile.save')}</Button>
    </div>
  );
};

export default ProfilePersonalPage;
