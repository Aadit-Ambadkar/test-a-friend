import '../styles/globals.css';
import {DataItemsProvider} from '../contexts/dataContext';

function MyApp({ Component, pageProps }) {
  return (
    <div className='bg-slate-800 h-full min-h-screen py-5'>
      <DataItemsProvider>
            <Component {...pageProps} />
      </DataItemsProvider>
    </div>
  );
}

export default MyApp;