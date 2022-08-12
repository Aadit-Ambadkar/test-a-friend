import '../styles/globals.css';
import {DataItemsProvider} from '../contexts/dataContext';

function MyApp({ Component, pageProps }) {
  return (
    <div className='h-screen bg-slate-800 py-5'>
      <DataItemsProvider>
            <Component {...pageProps} />
      </DataItemsProvider>
    </div>
  );
}

export default MyApp;