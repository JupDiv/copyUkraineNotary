import {
  HeaderContactsContainer,
  HeaderContactsItem,
  HeaderContactsLogoMobileOperator,
} from './HeaderContacts.styles';

export default function HeaderContacts() {
  return (
    <HeaderContactsContainer>
      <HeaderContactsItem>
        <HeaderContactsLogoMobileOperator
          width={20}
          height={20}
          src={
            'https://upload.wikimedia.org/wikipedia/commons/7/7d/Kyivstar_2015_logo_-_Brandmark.svg'
          }
          alt="Kyivstar"
        />
        3806700000000
      </HeaderContactsItem>
      <HeaderContactsItem>
        <HeaderContactsLogoMobileOperator
          width={20}
          height={20}
          src={
            'https://upload.wikimedia.org/wikipedia/commons/a/a6/Vodafone_icon.svg'
          }
          alt="Vodafone"
        />
        3805000000000
      </HeaderContactsItem>
    </HeaderContactsContainer>
  );
}
