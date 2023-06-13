import {
  IconMessangerLogo,
  IconMessangerItem,
  IconMessangerContainer,
} from './IconMessanger.styles';

type IconMessangerProps = {
  place?: string;
};
export default function IconMessanger({ place }: IconMessangerProps) {
  return (
    <IconMessangerContainer $place={place}>
      <IconMessangerItem>
        <a href="https://t.me/jupitersSuns">
          <IconMessangerLogo
            $place={place}
            width={30}
            height={30}
            src={
              'https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg'
            }
            alt="Telegram"
          />
        </a>
      </IconMessangerItem>
      <IconMessangerItem>
        <a href="https://wa.me/380735257557">
          <IconMessangerLogo
            $place={place}
            width={30}
            height={30}
            src={
              'https://upload.wikimedia.org/wikipedia/commons/1/19/WhatsApp_logo-color-vertical.svg'
            }
            alt="Watsup"
          />
        </a>
      </IconMessangerItem>
      <IconMessangerItem>
        <a href="viber://chat?number=%2B380735257557">
          <IconMessangerLogo
            $place={place}
            width={30}
            height={30}
            src={
              'https://upload.wikimedia.org/wikipedia/commons/5/5d/Viber_logo_2018_%28without_text%29.svg'
            }
            alt="Viber"
          />
        </a>
      </IconMessangerItem>
    </IconMessangerContainer>
  );
}
