import React from 'react';
import { useLocation, useNavigate } from 'react-router';

import Logo from '@/assets/example.svg';
import { WalletSelector } from '@/components/shared';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Separator } from '@/components/ui/separator';
import { PATH } from '@/constants';
import { cn } from '@/lib';

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
      path: PATH.EXCHANGE.ROOT,
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
    {
      name: 'Docs',
      path: PATH.DOCUMENTATION,
      key: 'documentation',
    },
  ];

  interface ListItemProps extends React.ComponentPropsWithoutRef<'a'> {
    className?: string;
    title: string;
    children?: React.ReactNode;
  }

  const navigate = useNavigate();

  const location = useLocation();

  const isActive = (path?: string) => {
    if (!path) return false;
    return location.pathname.startsWith(path);
  };

  const ListItem = React.forwardRef<React.ElementRef<'a'>, ListItemProps>(
    ({ className, title, children, href, ...props }, ref) => {
      return (
        <li className="bg-[#2E2733]">
          <NavigationMenuLink asChild>
            <a
              ref={ref}
              className={cn(
                'block select-none leading-none no-underline outline-none transition-colors group',
                className
              )}
              href={href}
              {...props}
            >
              <div
                className={cn(
                  'text-sm font-medium leading-none text-white/80 group-hover:text-white/60 group-focus:text-white/60',
                  isActive(href) && 'text-[#A66AFE]'
                )}
              >
                {title}
              </div>
              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
            </a>
          </NavigationMenuLink>
        </li>
      );
    }
  );
  ListItem.displayName = 'ListItem';

  return (
    <header className="fixed z-50 flex h-20 w-full flex-row items-center justify-between bg-transparent p-8">
      <div className="flex items-center justify-between gap-4">
        <img src={Logo} alt="Logo" className="size-16 rounded-full" />
        <span className="text-3xl font-bold text-[#A66AFE]/90">Megaloandon</span>
      </div>
      <NavigationMenu className="[&_.absolute]:translate-x-[7.75rem]">
        <NavigationMenuList className="flex gap-4">
          {MenuItems.map((item) => {
            return (
              <NavigationMenuItem key={item.key}>
                <NavigationMenuTrigger
                  className="bg-transparent py-6 hover:bg-white/5 focus:bg-transparent [&_.lucide-chevron-down]:hidden"
                  onClick={() => {
                    navigate(item.path);
                  }}
                >
                  <NavigationMenuLink
                    className={cn('text-xl text-white/80', isActive(item.path) && 'text-[#A66AFE]')}
                  >
                    {item.name}
                  </NavigationMenuLink>
                </NavigationMenuTrigger>
                {item.children && (
                  <NavigationMenuContent className="flex w-full items-center">
                    <ul className="flex min-w-32 flex-col gap-2 bg-[#2E2733] p-3">
                      {item.children.map((child, index) => (
                        <>
                          {index !== 0 && (
                            <Separator orientation="horizontal" className="bg-white" />
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
