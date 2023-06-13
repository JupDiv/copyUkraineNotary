import { ImageContainer, ImageCallback } from './ImageCallback.styles';
import mailLogo from '../../assets/mailLogo.png';

type ImageCallbackProps = {
  toggleModal: (bool: boolean) => void;
};

export default function ImageCallBack({
  toggleModal,
}: ImageCallbackProps): JSX.Element {
  return (
    <ImageContainer>
      <ImageCallback
        onClick={() => toggleModal(true)}
        src={mailLogo}
        height={100}
        width={100}
        alt="picturesMail"
      />
    </ImageContainer>
  );
}
