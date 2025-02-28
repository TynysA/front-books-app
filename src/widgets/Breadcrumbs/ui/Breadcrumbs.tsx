import tw from 'twin.macro';

import Arrow from '@/shared/assets/icons/Arrow';

const Breadcrumbs = ({ items }) => {
  return (
    <div tw='flex items-center gap-[8px] mb-[14px]'>
      {items.map((item, idx) => (
        <div key={idx} tw='flex gap-[8px] items-center text-[14px] text-[#919399] leading-[16px]'>
          <span>{item}</span>
          {idx !== items?.length - 1 && (
            <span>
              <Arrow twstyle={tw`rotate-90 transition-transform w-[12px] h-[12px]`} fill={'#919399'} />
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default Breadcrumbs;
