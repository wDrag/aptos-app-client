import React from 'react';
import { useNavigate } from 'react-router';

import Logo from '@/assets/example.svg';
import { WalletSelector } from '@/components/shared';
import { PATH } from '@/constants';
import { cn } from '@/lib';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '../ui/navigation-menu';

export const Header = () => {
  interface IMenuItems {
    name: string;
    path: string;
    key: string;
    children?: IMenuItems[];
  }

  const MenuItems: IMenuItems[] = [
    {
      name: 'Lending',
      path: PATH.LENDING,
      key: 'lending',
    },
    {
      name: 'Exchange',
      path: PATH.EXCHANGE.BUY,
      key: 'exchange',
      children: [
        {
          name: 'Buy NFT',
          path: PATH.EXCHANGE.BUY,
          key: 'buy',
        },
        {
          name: 'Sell NFT',
          path: PATH.EXCHANGE.SELL,
          key: 'sell',
        },
      ],
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

  interface ListItemProps extends React.ComponentPropsWithoutRef<'a'> {
    className?: string;
    title: string;
    children?: React.ReactNode;
  }

  const ListItem = React.forwardRef<React.ElementRef<'a'>, ListItemProps>(
    ({ className, title, children, ...props }, ref) => {
      return (
        <li>
          <NavigationMenuLink asChild>
            <a
              ref={ref}
              className={cn(
                'block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                className
              )}
              {...props}
            >
              <div className="text-base font-medium leading-none">{title}</div>
              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
            </a>
          </NavigationMenuLink>
        </li>
      );
    }
  );
  ListItem.displayName = 'ListItem';

  const navigate = useNavigate();

  return (
    <header className="fixed z-50 flex h-20 w-full flex-row items-center justify-between bg-transparent p-8">
      <div className="flex items-center justify-between gap-4">
        <img src={Logo} alt="Logo" className="size-10" />
        <span className="text-2xl">Megaloandon</span>
      </div>
      <NavigationMenu className="[&_.absolute]:translate-x-[6.75rem]">
        <NavigationMenuList>
          {MenuItems.map((item) => {
            return (
              <NavigationMenuItem key={item.key}>
                <NavigationMenuTrigger
                  className="[&_.lucide-chevron-down]:hidden"
                  onClick={() => {
                    navigate(item.path);
                  }}
                >
                  <NavigationMenuLink className="text-xl">{item.name}</NavigationMenuLink>
                </NavigationMenuTrigger>
                {item.children && (
                  <NavigationMenuContent className="flex w-full items-center">
                    <ul className="flex min-w-32 flex-col gap-3 p-4">
                      {item.children.map((child, index) => (
                        <>
                          {index !== 0 && (
                            <div className="w-full border-t border-muted-foreground" />
                          )}
                          <ListItem key={child.key} title={child.name} href={child.path} />
                        </>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                )}
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
      <WalletSelector />
    </header>
  );
};
