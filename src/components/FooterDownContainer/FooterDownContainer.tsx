import FooterSocialIcons from '../FooterSocialIcons/FooterSocialIcons';
import {
  FooterDownContainerText,
  FooterDownWrapper,
} from './FooterDownContainer.styles';

export default function FooterDownContainer() {
  return (
    <FooterDownWrapper>
      <FooterSocialIcons />
      <FooterDownContainerText>
        © 2023. Всі права захищені
      </FooterDownContainerText>
      <FooterDownContainerText>curlyDevTeam™</FooterDownContainerText>
    </FooterDownWrapper>
  );
}
