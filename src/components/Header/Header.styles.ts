import styles from 'styled-components';

export const HeaderWrapper = styles.header`

`;

export const HeaderContainer = styles.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 58px;
    background-color: #fff;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);
    padding: 20px;
    margin: 0 auto;
    border-radius: 10px;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: row;
        padding: 0;
        margin: 0;
    }

`;
