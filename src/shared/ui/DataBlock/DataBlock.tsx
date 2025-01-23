import tw from 'twin.macro';
export const DataBlock = ({ data, title, twStyle }) => {
  return (
    <div tw='flex flex-col p-[16px] text-black rounded-[16px]' css={[twStyle]}>
      <div tw='text-primary text-[18px] font-semibold'>{title}</div>
      {data.map((item, index) => (
        <div key={index} tw='flex flex-col py-[16px] border-b-[1px] border-[#EAECED] last:border-0'>
          <div tw='text-secondary text-[13px] font-medium'>{item.title}</div>
          {Array.isArray(item.info) ? (
            <div tw='flex flex-col gap-[16px] mt-[16px]'>
              {item.info.map((el, subIndex) => (
                <div key={subIndex} tw='text-primary'>
                  <p tw='text-[16px] font-semibold'>{el.title}</p>
                  <span tw='text-secondary text-[13px] font-medium'>{el.subTitle}</span>
                </div>
              ))}
            </div>
          ) : (
            <div>
              <p tw='text-primary text-[16px] font-semibold'>{item.info}</p>
              <span
                css={[
                  item.type === 'CAR' &&
                    tw`py-[2px] px-[4px] border-[1px] border-[#636366] text-secondary text-[11px] rounded-[4px]`
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
