import {
  FooterSocialIconContainer,
  FooterSocialIconImage,
} from './FooterSocialIcons.styles';

export default function FooterSocialIcons() {
  return (
    <FooterSocialIconContainer>
      <a href="https://twitter.com">
        <FooterSocialIconImage
          width={30}
          height={30}
          src={
            'https://upload.wikimedia.org/wikipedia/commons/3/30/Twitter2.svg'
          }
          alt="Twitter"
        />
      </a>
      <a href="https://facebook.com">
        <FooterSocialIconImage
          width={33}
          height={33}
          src={
            'https://upload.wikimedia.org/wikipedia/commons/1/1b/Facebook_icon.svg'
          }
          alt="Facebook"
        />
      </a>

      <a href="https://instagram.com">
        <FooterSocialIconImage
          width={32}
          height={32}
          src={
            'https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg'
          }
          alt="Instagram"
        />
      </a>
    </FooterSocialIconContainer>
  );
}
