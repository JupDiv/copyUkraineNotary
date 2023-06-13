import { useCallback } from 'react';
import { NavContainer, NavItem, NavItemLink } from './HeaderNav.styles';
import { usePathname } from 'next/navigation';

type NavMenu = {
  title: string;
  link: string;
  key: string;
};

export default function HeaderNav() {
  const pathname = usePathname();

  const navMenuItems = useCallback(() => {
    const navMenu: NavMenu[] = [
      {
        title: 'Головна',
        link: '/',
        key: 'home',
      },
      {
        title: 'Про нас',
        link: '/about',
        key: 'about',
      },
      {
        title: 'Контакти',
        link: '/contacts',
        key: 'contacts',
      },
      {
        title: 'Послуги',
        link: '/favor',
        key: 'favor',
      },
    ];

    return navMenu.map(
      (item: NavMenu): JSX.Element => (
        <NavItem key={item.key} $isHighlighted={pathname === item.link}>
          <NavItemLink href={item.link} $isStyle={pathname === item.link}>
            {item.title}
          </NavItemLink>
        </NavItem>
      )
    );
  }, [pathname]);

  return <NavContainer>{navMenuItems()}</NavContainer>;
}
