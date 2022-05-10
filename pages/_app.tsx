import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import DQLoader from '../components/DQLoader/DQLoader';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  const router = useRouter();
  const [pageLoading, setLoading] = useState<boolean>(false); // Mettre en true si activer le loader

  useEffect(() => {
    router.events.on('routeChangeStart', () => setLoading(true));
    router.events.on('routeChangeComplete', () => setLoading(false));
    router.events.on('routeChangeError', () => setLoading(false));
  }, [router]);

  return (<>
    
    <DQLoader loading={pageLoading}/>
    <Component {...pageProps}/>
    
  </>
  );
}

export default MyApp
