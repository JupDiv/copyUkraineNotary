import styles from './layout.module.css';

export default function FavorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <title>Послуги</title>
      <meta name="description" content="Послуги" />
      <h1 className={styles.header}>Послуги</h1>
      <div className={styles.blockFavor}>{children}</div>
    </>
  );
}
