import { AboutImageContainer, AboutImageItem } from './AboutImage.styles';
import pictureForAbout from '../../assets/pictureForAbout.jpg';
export default function AboutImage() {
  return (
    <AboutImageContainer>
      <AboutImageItem src={pictureForAbout} alt="Picture for about" />
    </AboutImageContainer>
  );
}
