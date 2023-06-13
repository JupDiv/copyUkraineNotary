'use client';

import {
  FooterWrapper,
  FooterContainer,
  FooterContacts,
} from './Footer.styles';

import IconMessanger from '../IconMessanger/IconMessanger';
import FooterNavigation from '../FooterNavigation/FooterNavigation';
import WorkTime from '../WorkTime/WorkTime';
//Look at this import:
import FooterDownContainer from '../FooterDownContainer/FooterDownContainer';

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterNavigation />
        <FooterContacts>
          <WorkTime />
          <IconMessanger place="footer" />
        </FooterContacts>
      </FooterContainer>
      <FooterDownContainer />
    </FooterWrapper>
  );
}
