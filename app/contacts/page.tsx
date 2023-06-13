import Contacts from '@/components/Contacts/Contacts';

const apiKey = 'AIzaSyD_JeBWQIWIFUfCoIla6H6ldgTcCgQ9DHA';

export default function Page() {
  return (
    <>
      <Contacts apiKey={apiKey} />
    </>
  );
}
