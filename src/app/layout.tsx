import { constructMetadata } from '@/utils/next';
import { WorkSansFontStyle } from '@/styles/globalFontsStyle';
import { background } from '@/styles/commonStyle.css';

import Providers from './providers';

import '@/styles/globalStyle.css';

export const metadata = constructMetadata({
  title: 'Aaron Son — For a better UX and DX',
  description: 'I am a software engineer who loves to build things.',
  keywords: ['Aaron Son', 'safethecode', '손지민', '프론트엔드'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={WorkSansFontStyle.variable}>
        <Providers>{children}</Providers>
        <div className={background} />
      </body>
    </html>
  );
}
