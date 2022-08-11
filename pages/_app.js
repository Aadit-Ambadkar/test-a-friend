import '../styles/globals.css';
import {DataItemsProvider} from '../contexts/dataContext';

function MyApp({ Component, pageProps }) {
  return (
    <DataItemsProvider>
      <div className="bg-slate-800 pattern py-5">
          <Component {...pageProps} />
      </div>
    </DataItemsProvider>
  );
}

export default MyApp;