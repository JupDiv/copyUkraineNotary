import styles from 'styled-components';
import Image from 'next/image';

export const HeaderContactsContainer = styles.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    height: 70px;

    @media (max-width: 768px) {
        margin-left: 0;
        height: 58px;
        justify-content: center;
        font-size: 14px;
    }

    @media (max-width: 425px) {
        font-size: 12px;
    }
`;

export const HeaderContactsItem = styles.div`
    display: flex; 
    align-items: center;
    justify-content: center;
    height: 70px;
    width: 100px;

    @media (max-width: 768px) {
        width: 125px;
        height: 20px;
`;

export const HeaderContactsLogoMobileOperator = styles(Image)`
    height: 20px;
    width: 20px;
    margin-right: 20px;
    
    @media (max-width: 425px) {
        height: 15px;
        width: 15px;
        margin-right: 5px;
     }
`;
