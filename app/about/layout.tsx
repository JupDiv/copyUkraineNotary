import styles from './layout.module.css';
export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <title>Про нас</title>
      <meta name="description" content="About" />
      <h1 className={styles.header}>Про нас</h1>
      <div className={styles.container}>{children}</div>
    </>
  );
}
