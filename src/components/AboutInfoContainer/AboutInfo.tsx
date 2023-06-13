import {
  AboutInfoContainer,
  AboutInfoTitle,
  AboutInfoText,
  AboutInfoSubtitle,
} from './AboutInfo.styles';

export default function AboutInfo() {
  return (
    <AboutInfoContainer>
      <AboutInfoTitle>Про наші нотаріальні послуги</AboutInfoTitle>
      <AboutInfoText>
        Наші послуги нотаріуса тут, щоб допомогти вам засвідчувати документи,
        складати присяги, та виконувати різноманітні адміністративні функції,
        щоб ваші юридичні справи проходили гладко.
      </AboutInfoText>

      <AboutInfoSubtitle>Наш досвід</AboutInfoSubtitle>
      <AboutInfoText>
        Ми надаємо нотаріальні послуги у нашій громаді вже понад 20 років. Ми
        пишаємося нашим глибоким розумінням нотаріального процесу і нашим
        відданням наданню найкращого можливого сервісу нашим клієнтам.
      </AboutInfoText>

      <AboutInfoSubtitle>Зв`яжіться з нами</AboutInfoSubtitle>
      <AboutInfoText>
        Якщо вам потрібні наші нотаріальні послуги, будь ласка, не соромтеся
        звертатися. Ви можете зв`язатися з нами по телефону, електронною поштою,
        або відвідавши наш офіс в робочий час. Ми раді служити вам.
      </AboutInfoText>
    </AboutInfoContainer>
  );
}
