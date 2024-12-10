import tw from 'twin.macro';
export const DataBlock = ({ data, title }) => {
  return (
    <div tw='flex flex-col bg-[#FFFFFF] p-[16px] text-black rounded-[16px]'>
      <div tw='text-[#0F0F0F] text-[18px] font-semibold'>{title}</div>
      {data.map((item, index) => (
        <div key={index} tw='flex flex-col py-[16px] border-b-[1px] border-[#EAECED] last:border-0'>
          <div tw='text-[#636366] text-[13px] font-medium'>{item.title}</div>
          {Array.isArray(item.info) ? (
            <div tw='flex flex-col gap-[16px] mt-[16px]'>
              {item.info.map((el, subIndex) => (
                <div key={subIndex} tw='text-[#0F0F0F]'>
                  <p tw='text-[16px] font-semibold'>{el.title}</p>
                  <span tw='text-[#636366] text-[13px] font-medium'>{el.subTitle}</span>
                </div>
              ))}
            </div>
          ) : (
            <div>
              <p tw='text-[#0F0F0F] text-[16px] font-semibold'>{item.info}</p>
              <span
                css={[
                  item.type === 'CAR' &&
                    tw`py-[2px] px-[4px] border-[1px] border-[#636366] text-[#636366] text-[11px] rounded-[4px]`
                ]}
              >
                {item?.subInfo}
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
