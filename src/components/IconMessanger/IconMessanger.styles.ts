import styles from 'styled-components';
import Image from 'next/image';

type IconMessangerProps = {
  $place?: string;
};

export const IconMessangerContainer = styles.div<IconMessangerProps>`
display: flex;
align-items: center;
justify-content: ${({ $place }) =>
  $place === 'footer' ? 'space-around' : 'space-between'};

margin-top: ${({ $place }) => ($place === 'footer' ? '8px' : '0')};

`;
export const IconMessangerItem = styles.div`
display: flex;
align-items: center;
justify-content: center;
margin: 0 5px;

@media (max-width: 320px) {
    margin: 0 2px;
}

@keyframes shake {
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
}

&:hover {
    animation: shake 5s;
    animation-iteration-count: infinite;
}
`;
export const IconMessangerLogo = styles(Image)<IconMessangerProps>`

@media (max-width: 320px) {
    width: ${({ $place }) => ($place === 'header' ? '20px' : '30px')};
    height: ${({ $place }) => ($place === 'header' ? '20px' : '30px')};

}
`;
