import {
  FooterNavigationList,
  FooterNavigationItem,
  FooterNavigationLink,
} from './FooterNavigation.styles';

export default function FooterNavigation() {
  return (
    <FooterNavigationList>
      <FooterNavigationItem>
        <FooterNavigationLink href={'/'}>Головна</FooterNavigationLink>
      </FooterNavigationItem>
      <FooterNavigationItem>
        <FooterNavigationLink href={'/about'}>Про нас</FooterNavigationLink>
      </FooterNavigationItem>
      <FooterNavigationItem>
        <FooterNavigationLink href={'/contacts'}>Контакти</FooterNavigationLink>
      </FooterNavigationItem>
      <FooterNavigationItem>
        <FooterNavigationLink href={'/favor'}>Послуги</FooterNavigationLink>
      </FooterNavigationItem>
    </FooterNavigationList>
  );
}
