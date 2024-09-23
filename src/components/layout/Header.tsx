import { useNavigate } from 'react-router';

import Logo from '@/assets/example.svg';
import { WalletSelector } from '@/components/shared';
import { PATH } from '@/constants';

export const Header = () => {
  interface IMenuItems {
    name: string;
    path: string;
    key: string;
  }

  const MenuItems: IMenuItems[] = [
    {
      name: 'Home',
      path: PATH.HOME,
      key: 'home',
    },
    {
      name: 'Lending',
      path: PATH.LENDING,
      key: 'lending',
    },
    {
      name: 'Exchange',
      path: PATH.EXCHANGE.BUY,
      key: 'exchange',
    },
    {
      name: 'Buy With Down Payment',
      path: PATH.DOWNPAYMENT_BUY,
      key: 'downpayment',
    },
    {
      name: 'Auction',
      path: PATH.AUCTION,
      key: 'auction',
    },
  ];

  const navigate = useNavigate();

  return (
    <header className="fixed z-50 flex h-20 w-full flex-row items-center justify-between bg-primary-foreground p-8">
      <div className="flex items-center justify-start font-normal text-white ">
        <img src={Logo} alt="logo" className="size-12 rounded-full" />
        <span className="ml-4 text-2xl font-normal text-white">Megaloandon</span>
      </div>
      <div className="flex gap-8 text-xl font-normal text-white">
        {MenuItems.map((item, index) => {
          return (
            <div
              className="cursor-pointer"
              key={index}
              onClick={() => {
                navigate(item.path);
              }}
            >
              {item.name}
            </div>
          );
        })}
      </div>
      <WalletSelector />
    </header>
  );
};
