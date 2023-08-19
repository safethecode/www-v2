import { Inter, Work_Sans } from 'next/font/google';

export const InterFontStyle = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const WorkSansFontStyle = Work_Sans({
  variable: '--font-work-sans',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});
