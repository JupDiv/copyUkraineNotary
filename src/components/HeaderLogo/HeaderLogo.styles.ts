import styles from 'styled-components';
import Image from 'next/image';

export const HeaderLogoContainer = styles.div`
margin-left: 70px;

@media (max-width: 768px) {
    height: 40px;
    width: 40px;
    margin-left: 0;
}

@media (max-width: 425px) {
    display: none;
}
`;

export const HeaderLogoImage = styles(Image)`

@media (max-width: 768px) {
    height: 40px;
    width: 40px;
}
`;
