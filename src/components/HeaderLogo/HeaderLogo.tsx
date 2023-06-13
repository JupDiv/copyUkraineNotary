import { HeaderLogoContainer, HeaderLogoImage } from './HeaderLogo.styles';
import Logo from '../../assets/Logo.png';
export default function HeaderLogo() {
  return (
    <HeaderLogoContainer>
      <HeaderLogoImage
        priority={true}
        src={Logo}
        width={100}
        height={100}
        alt="LogoImage"
      />
    </HeaderLogoContainer>
  );
}
