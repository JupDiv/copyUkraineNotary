import {
  ContactsContainer,
  ContacsContainerTitle,
  ContactsTitle,
  ContactsContent,
  ContactsContentItem,
  ContactsContentItemTitle,
  ContactsContentItemText,
  ContactsSubTitle,
  ContactsText,
  ContactsTextLink,
} from './ContactsInfo.styles';

export default function ContactsInfo() {
  return (
    <ContactsContainer>
      <ContacsContainerTitle>
        <ContactsTitle>Звʼязатись з нами</ContactsTitle>
      </ContacsContainerTitle>
      <ContactsContent>
        <ContactsContentItem>
          <ContactsContentItemTitle>
            <ContactsSubTitle>Адреса</ContactsSubTitle>
          </ContactsContentItemTitle>
          <ContactsContentItemText>
            <ContactsText>м. Бровари вул. Пірогова 22</ContactsText>
          </ContactsContentItemText>
        </ContactsContentItem>
        <ContactsContentItem>
          <ContactsContentItemTitle>
            <ContactsSubTitle>Телефон</ContactsSubTitle>
          </ContactsContentItemTitle>
          <ContactsContentItemText>
            <ContactsText>+38 (067) 123-45-67</ContactsText>
          </ContactsContentItemText>
        </ContactsContentItem>
        <ContactsContentItem>
          <ContactsContentItemTitle>
            <ContactsSubTitle>Почта</ContactsSubTitle>
          </ContactsContentItemTitle>
          <ContactsContentItemText>
            <ContactsText>
              <ContactsTextLink
                href="mailto:
                                        hlib.developer@gmail.com
                                    "
              >
                support-notary@gmail.com
              </ContactsTextLink>
            </ContactsText>
          </ContactsContentItemText>
        </ContactsContentItem>
      </ContactsContent>
    </ContactsContainer>
  );
}
