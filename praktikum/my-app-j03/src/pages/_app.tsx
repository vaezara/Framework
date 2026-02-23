import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import AppShell from '@/components/layouts/Appshell';
import Navbar from '@/components/layouts/navbar'
import Footer from '@/components/layouts/footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <div className="app-container">
        <Navbar />
        <div className="content">
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </main>
  );
};