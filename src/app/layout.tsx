import { Karla } from 'next/font/google';
import './globals.css';

const karla = Karla({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-karla',
});

export const metadata = {
  title: 'PokemonWiki',
  description: 'Wiki about pokemon',
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/favicon.png', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={karla.variable}>
      <body>{children}</body>
    </html>
  );
}
