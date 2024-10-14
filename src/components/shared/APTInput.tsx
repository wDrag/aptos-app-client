import { HTMLInputTypeAttribute, useState } from 'react';

import { Input } from '@/components/ui/input';
import { useGetMockAPTBalanceQuery } from '@/hooks/queries';
import { cn } from '@/lib';

type APTInputProps = {
  value: string;
  type?: HTMLInputTypeAttribute;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: any;
  className?: string;
};

export const APTInput = (props: APTInputProps) => {
  const { value, onChange, className, type } = props;
  const [firstRender, setFirstRender] = useState(true);
  const { data: accountBalance = 100 } = useGetMockAPTBalanceQuery();

  return (
    <div
      className={cn(
        'flex px-10 py-3 flex-col w-full items-center rounded-2xl bg-[#484549]',
        className
      )}
    >
      <div className="flex w-full items-center justify-between gap-2 ">
        <span className="text-lg text-white">Amount</span>
        <span className="text-lg text-white">Balance: {accountBalance}</span>
      </div>
      <div className="flex w-full items-center justify-between gap-2 ">
        <Input
          onFocus={(e) => {
            if (firstRender) {
              setFirstRender(false);
              e.target.blur();
            }
          }}
          className="bg-[#484549] text-2xl text-white"
          type={type}
          value={value}
          onChange={onChange}
          placeholder="0.00"
        />
        <div className="flex items-center gap-1">
          <img src="/APT.png" alt="APT" className="mx-1 size-5 rounded-full" />
          <span className="text-xl text-white">APT</span>
        </div>
      </div>
    </div>
  );
};
