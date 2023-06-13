'use client';

import { ContactsWrapper } from './Contacts.styles';
import GoogleMaps from '../GoogleMaps/GoogleMaps';
import ContactsInfo from '../ContactsInfo/ContactsInfo';

type ContactsProps = {
  apiKey: string;
};

export default function Contacts({ apiKey }: ContactsProps) {
  return (
    <ContactsWrapper>
      <GoogleMaps apiKey={apiKey} />
      <ContactsInfo />
    </ContactsWrapper>
  );
}
