import { Analytics } from '@vercel/analytics/react';
import StyledComponentsRegistry from '../lib/registry';
import './global.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

import CreateMail from '@/components/CreateMail/CreateMail';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html>
      <body>
        <Header />
        <Analytics />
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        <CreateMail />
        <Footer />
      </body>
    </html>
  );
}
