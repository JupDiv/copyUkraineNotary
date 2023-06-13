import styles from 'styled-components';

export const WorkTimeContainer = styles.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 150px;
    height: 70px;

    @media (max-width: 425px) {
        justify-content: center;
        align-items: center;
        font-size: 12px;
    }

  
`;

export const WorkTimeTitle = styles.h4`
    margin: 0;
    padding: 0;
`;

export const WorkTimeText = styles.p`
    margin: 0;
    padding: 0;
    

    @media (max-width: 768px) {
        font-size: 12px;
    }
`;
