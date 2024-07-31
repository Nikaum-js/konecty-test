import { AppProps } from 'next/app';
import { Inter, Montserrat } from '@next/font/google';
import '../../styles/global.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.variable} ${montserrat.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
