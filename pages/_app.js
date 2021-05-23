import '../styles/globals.css'
import '@fontsource/roboto';
import Layout from '../components/Layout';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
  
}

export default MyApp
