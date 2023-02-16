import  MainLayout  from '@/src/Components/layout/main-layout';
import '@/styles/App.scss';

export default function App({ Component, pageProps }) {
  return (
  <>
  <MainLayout>
  <Component {...pageProps} />
  </MainLayout>
  </>)
}
