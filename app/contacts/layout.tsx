import styles from './layout.module.css';
export default function ContactsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <title>Контакти</title>
      <meta name="description" content="Контакти" />
      <h1 className={styles.header}>Контакти</h1>
      <div className={styles.blockContact}>{children}</div>
    </>
  );
}
