'use client';
import { HeaderContainer, HeaderWrapper } from './Header.styles';

import HeaderNav from '../HeaderNav/HeaderNav';
import IconMessanger from '../IconMessanger/IconMessanger';
import HeaderContacts from '../HeaderContact/HeaderContacts';
import HeaderLogo from '../HeaderLogo/HeaderLogo';
import WorkTime from '../WorkTime/WorkTime';

export default function Header() {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderLogo />
        <HeaderContacts />
        <IconMessanger place="header" />
        <WorkTime />
      </HeaderContainer>
      <HeaderNav />
    </HeaderWrapper>
  );
}
